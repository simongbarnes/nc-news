import axios from "axios";

export default function fetchComments (articleId){
      return axios
        .get(`https://nc-news-2d8c.onrender.com/api/articles/${articleId}/comments`)
    }