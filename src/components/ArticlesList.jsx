import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import ArticleCard from "./ArticleCard";
import fetchArticles from "../utils/fetchArticles";
import TopicSelector from "./TopicSelector";
import SortSelector from "./SortSelector";

export default function ArticlesList({ topic }) {
  const [articles, setArticles] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let queries = {};

  const [currentTopic, setCurrentTopic] = useState(topic);
  const [currentSort, setCurrentSort] = useState('created_at');
  const [currentOrder, setCurrentOrder] = useState('desc');

  queries.topic = currentTopic;
  queries.sort = currentSort;
  queries.order = currentOrder;

  useEffect(() => {
    fetchArticles(queries).then((response) => {
      setArticles(response.data.articles);
      setIsLoading(false);
    })
    .catch(function (error) {
      console.log(error.response.data.message)
      if (error.response.data.message === 'Topic does not exist'){
        navigate(`/error/topics/${error.response.status}`);
      } else {
        navigate(`/error/articles/${error.response.status}`);
      }
    });
  }, [currentTopic, currentSort, currentOrder]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <TopicSelector
        currentTopic={currentTopic}
        setCurrentTopic={setCurrentTopic}
      />
      <SortSelector currentSort={currentSort} setCurrentSort={setCurrentSort} currentOrder={currentOrder} setCurrentOrder={setCurrentOrder} />
      <ul>
        {articles.map((article, index) => {
          return (
            <li key={index}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
