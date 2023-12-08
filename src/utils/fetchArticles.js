import axios from "axios";

export default function fetchArticles({topic, sort, order}) {

  let path = ""
  let queryStr = `?sort_by=${sort}&&order=${order}`

  if (topic !== "home"){
    queryStr += `&&topic=${topic}`
  }

  path = `https://nc-news-2d8c.onrender.com/api/articles${queryStr}`

  return axios
    .get(path)
}
