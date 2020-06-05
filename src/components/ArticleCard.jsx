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
    <Container align="left" style={{height: `${200 * size}px`, width: `${400 * size}px`, marginBottom: 15 * margin, marginLeft: 15 * margin}}>
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
          style={{ height: `${200 * size}px`, width: `${400 * size}px`}}
        />
        <h5 className="article-title">{article.title}</h5>
      </Link>
    </Container>
  );
};

export default ArticleCard;
