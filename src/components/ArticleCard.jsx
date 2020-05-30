import React from "react";
import { Placeholder, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  debugger
  return (
    <Grid.Row width={3} centered>
      <Link
        to={{
          pathname: `/article/${article.id}`
        }}
        key={article.id}
        id={"article-" + article.id}
      > 
        <Image src={article.image}
            style={{ height: 200, width: 400 }}
         />
            <h5 className="article-title">{article.title}</h5>
      </Link>
    </Grid.Row>
  );
};

export default ArticleCard;
