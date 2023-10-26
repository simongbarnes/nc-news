import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import fetchArticles from "../utils/fetchArticles";
import TopicSelector from "./TopicSelector";
import SortSelector from "./SortSelector";

export default function ArticlesList({ topic }) {
  const [articles, setArticles] = useState([]);
  const [loading, setIsLoading] = useState(true);
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
      return;
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
