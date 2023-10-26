import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import fetchArticles from "../utils/fetchArticles";
import TopicSelector from "./TopicSelector";

export default function ArticlesList({topic}) {
  const [articles, setArticles] = useState([]);
  const [loading, setIsLoading] = useState(true);
  let queries = {};

  const [currentTopic, setCurrentTopic] = useState(topic);

  queries.topic = currentTopic;

  useEffect(() => {
    fetchArticles(queries).then((response) => {
      setArticles(response.data.articles);
      setIsLoading(false);
      return
    })
  }, [currentTopic]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <TopicSelector
        currentTopic={currentTopic} setCurrentTopic={setCurrentTopic}
      />
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
