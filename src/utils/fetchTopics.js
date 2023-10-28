import axios from "axios";

export default function fetchTopics() {
  return axios
    .get(`https://nc-news-2d8c.onrender.com/api/topics`)
}
