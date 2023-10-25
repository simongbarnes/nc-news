import axios from "axios";

export const postComment = (comment) => {

  const { body, username, articleId } = comment;
  const path = `https://nc-news-2d8c.onrender.com/api/articles/${articleId}/comments`;

  return axios.post(path, comment);
};
