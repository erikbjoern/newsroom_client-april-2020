import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "semantic-ui-react";
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

  const bigArticleCards = filteredArticles().slice(0,4).map((article) => {
    return <ArticleCard article={article} size={1}/>;
  });

  const smallArticleCards = filteredArticles().slice(4,20).map((article) => {
    return <ArticleCard article={article} size={0.5}/>
  })

  const smallArticleCardsList = () => {
    for (let i = 0; i < smallArticleCards.length ; i+=4) {
      return (
        <Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {smallArticleCards[i]}
            </Grid.Column>
            <Grid.Column>
              {smallArticleCards[i+1]}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {smallArticleCards[i+2]}
            </Grid.Column>
            <Grid.Column>
              {smallArticleCards[i+3]}
            </Grid.Column>
          </Grid.Row>
        </Grid.Row>
      )
    }
  }

  return (
    <div>
      <Grid fluid columns="equal" divided centered>
        <Ad
          link={"https://www.mercedes-benz.com/en/"}
          id={"ad-1"}
          img={mercedesImg}
          alt={"mercedes"}
        />
        <Grid.Column>
          {bigArticleCards}
        </Grid.Column>
        <Grid.Column>
          {smallArticleCardsList}
        </Grid.Column>
        <Ad
          link={"https://www.malts.com/en-gb/visit-our-distilleries/lagavulin/"}
          id={"ad-2"}
          img={lagavulinImg}
          alt={"lagavulin"}
        />
      </Grid>
    </div>
  );
};

export default ArticleList;
