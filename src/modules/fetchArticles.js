import axios from 'axios'

const fetchArticleList = async ({dispatch, location}) => {
  debugger
  try {
    const response = await axios.get("/articles", { location: location });
    dispatch({
      type: "FETCH_ARTICLE_LIST",
      payload: response.data.articles
    });
  } catch (error) {
    console.log(error);
  }
};

export default fetchArticleList