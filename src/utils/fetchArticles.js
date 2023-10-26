import axios from "axios";

export default function fetchArticles({topic}) {

  let path = ""
  let queryStr = ""

  if (topic !== "all"){
    queryStr = `?topic=${topic}`
  }

  path = `https://nc-news-2d8c.onrender.com/api/articles${queryStr}`

  console.log(path, "<== fetchArticles List")

  return axios
    .get(path)
}
