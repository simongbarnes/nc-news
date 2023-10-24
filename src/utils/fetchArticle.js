import axios from "axios";

export default function fetchArticle(articleId) {
  return axios
    .get(`https://nc-news-2d8c.onrender.com/api/articles/${articleId}`)
}
