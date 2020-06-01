import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { Placeholder, Grid, Container, Image } from "semantic-ui-react";
=======
import { Grid, Container, Image } from "semantic-ui-react";
>>>>>>> 416c22dbfcdfabd0e3a74d538a9a6581ebc226f4
import axios from "axios";
import Ad from "./Ad";
import mercedesImg from "../images/mercedesAd.jpg";
import PremiumBlocker from "./PremiumBlocker";
import { useParams } from "react-router-dom";
import '../css/article.css'
import { useTranslation } from "react-i18next";


const SingleArticle = (props) => {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    const chooseArticle = async () => {
      let response = await axios.get(`/articles/${id}`);
      setArticle(response.data.article);
      debugger
    };
    chooseArticle();
<<<<<<< HEAD
  },[]);
  debugger
=======
  }, []);
>>>>>>> 416c22dbfcdfabd0e3a74d538a9a6581ebc226f4

  return (
    <Container align="center" style={{ paddingTop: "45px", width: "55%" }}>
      <Grid stretched>
        <Grid.Row centered>
          <Image
            src={article.image}
            style={{ height: 200, width: 400, textAlign: "left" }}
          />
          <h5
            key={article.id}
            id={"article-" + article.id + "-title"}
            className="article-title"
          >
            {article.title}
          </h5>
        </Grid.Row>
        <Grid.Row centered >
          <p
            key={article.id}
            id={"article-" + article.id + "-date"}
            style={{ textAlign: "left" }}
          >
            {t('Published at:')} {article.published_at}
          </p>
        </Grid.Row>
        <Grid.Row centered>
          <p
            key={article.id}
            id={"article-" + article.id + "-body"}
            style={{ textAlign: "left" }}
            className="article-body"
          >
            {article.body}
            {article.premium && !props.authenticated && <PremiumBlocker />}
          </p>
        </Grid.Row>
        <Grid.Row centered>
          <Ad
            link={"https://www.mercedes-benz.com/en/"}
            id={"ad-1"}
            img={mercedesImg}
            alt={"mercedes"}
          />
        </Grid.Row>
      </Grid>
    </Container>
  );
};
export default SingleArticle;
