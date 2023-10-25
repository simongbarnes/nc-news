import axios from "axios";

export default function updateArticle(articleId, changes) {

  return axios
    .patch(`https://nc-news-2d8c.onrender.com/api/articles/${articleId}`, changes)

}
