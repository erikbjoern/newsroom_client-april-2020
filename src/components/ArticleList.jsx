import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Container } from "semantic-ui-react";
import ArticleCard from "../components/ArticleCard";
import Ad from "./Ad";
import mercedesImg from "../images/mercedesAd.jpg";
import lagavulinImg from "../images/lagavulinAd.jpg";
import '../css/article.css'



const ArticleList = (props) => {
  const [articleList, setArticleList] = useState([]);
  const category = props.match.params.category || "";

  useEffect(() => {
    const fetchArticleList = async () => {
      try {
        const response = await axios.get("/articles");
        setArticleList(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticleList();
  }, []);

  let filteredArticles = () => {
    switch (category) {
      case "":
        return articleList;
      case "current":
        return articleList.filter((article) => {
          return Date.now() - Date.parse(article.published_at) < 86400000;
        });
      default:
        return articleList.filter((article) => article.category === category);
    }
  };

  const buildArticleCards = () => {
    let articleCards = []
    let i = 0
    let filtered = filteredArticles()
    while (i < (filtered.length - 8)) {
      debugger
      articleCards.push(
        <Grid.Row style={{padding: 0, margin: 1}}>
          <Grid.Column stretched style={{padding: 0, margin: 0, width: "fit-content"}}>
            <Grid.Row>
              <ArticleCard  article={filtered[i]} size={1} margin={2}/>
            </Grid.Row>
            <Grid.Row>
              <ArticleCard article={filtered[i+1]} size={1} margin={2}/>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={3} style={{padding: 0, marginLeft: 5, width: "fit-content"}}>
            <ArticleCard article={filtered[i+2]} size={2/3} margin={1}/>
            <ArticleCard article={filtered[i+3]} size={2/3} margin={1}/>
            <ArticleCard article={filtered[i+4]} size={2/3} margin={1}/>
          </Grid.Column>
          <Grid.Column width={3} style={{padding: 0, marginLeft: 5, width: "fit-content"}}>
            <ArticleCard article={filtered[i+5]} size={2/3} margin={1}/>
            <ArticleCard article={filtered[i+6]} size={2/3} margin={1}/>
            <ArticleCard article={filtered[i+7]} size={2/3} margin={1}/>
          </Grid.Column>
        </Grid.Row>
      )
    i += 6
    }
    return articleCards.reverse()
  };

  debugger

  return (
    <Container align="center" style={{width: "100%"}}>
    <Container align="center" style={{width: "100%", paddingTop: "10px"}}>
      <Ad
        link={"https://www.mercedes-benz.com/en/"}
        id={"ad-1"}
        img={mercedesImg}
        alt={"mercedes"}
      />
      {/* <Ad
        link={"https://www.mercedes-benz.com/en/"}
        id={"ad-1"}
        img={mercedesImg}
        alt={"mercedes"}
      />
      <Ad
        link={"https://www.mercedes-benz.com/en/"}
        id={"ad-1"}
        img={mercedesImg}
        alt={"mercedes"}
      /> */}
    </Container>
    <Grid id="article-cards" centered fluid stackable style={{marginTop: "50px", maxWidth:"80%", minWidth: "1100px"}}>
      {buildArticleCards()}
    </Grid>
      <Ad
        link={"https://www.malts.com/en-gb/visit-our-distilleries/lagavulin/"}
        id={"ad-2"}
        img={lagavulinImg}
        alt={"lagavulin"}
      />
    </Container>
  );
};

export default ArticleList;
