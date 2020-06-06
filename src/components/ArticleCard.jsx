import React from "react";
import { Container, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ArticleCard = ({ article, size, margin }) => {
  debugger
  const dispatch = useDispatch();

  const setActiveArticle = () => {
    dispatch({
      type: "SET_ACTIVE_ARTICLE",
      payload: article,
    });
  };

  debugger

  return (
    <Container
      align="left" style={{height: `${225 * size}px`, width: `${450 * size}px`, marginBottom: 5 * margin, marginLeft: 5 * margin}}>
      <Link
        onClick={setActiveArticle}
        to={{
          pathname: `/article/${article.id}`,
        }}
        key={article.id}
        id={"article-" + article.id}
      >
        <Image
          src={article.image}
          style={{ height: `${225 * size}px`, width: `${450 * size}px`}}
        />
        <h5 style={{fontSize: 17 * size}} className="article-title">{article.title}</h5>
      </Link>
    </Container>
  );
};

export default ArticleCard;
