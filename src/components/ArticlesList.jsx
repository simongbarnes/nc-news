import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import fetchArticles from "../utils/fetchArticles";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((response) => {
      setArticles(response.data.articles);
      setIsLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <ul>
      {articles.map((article, index) => {
        return (
          <li key={index} >
            <ArticleCard article={articles[index]} />
          </li>
        );
      })}
    </ul>
    </>
  );
}
