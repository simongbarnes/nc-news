import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import fetchArticles from "../utils/fetchArticles";
import SortSelector from "./SortSelector";
import FeatureArticle from "./FeatureArticle";

export default function ArticlesList({ currentTopic, setCurrentTopic }) {

  const [articles, setArticles] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let queries = {};

  const [currentSort, setCurrentSort] = useState("created_at");
  const [currentOrder, setCurrentOrder] = useState("desc");

  queries.topic = currentTopic;
  queries.sort = currentSort;
  queries.order = currentOrder;

  useEffect(() => {
    fetchArticles(queries)
      .then((response) => {
        setArticles(response.data.articles);
        setIsLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.data.message === "Topic does not exist") {
            navigate(`/error/topics/${error.response.status}`);
          } else {
            navigate(`/error/articles/${error.response.status}`);
          }
        } else {
          navigate("/error/articles/noresponse");
        }
      });
  }, [currentTopic, currentSort, currentOrder]);

  if (loading) return <p>Loading Articles...</p>;

  return (
    <>
      <SortSelector
        currentSort={currentSort}
        setCurrentSort={setCurrentSort}
        currentOrder={currentOrder}
        setCurrentOrder={setCurrentOrder}
      />
      <ul className="lg:columns-2">
        {articles.map((article, index) => {
          if (index === 0) {
            return (
              <li key={index}>
                <FeatureArticle articleId={article.article_id} />
              </li>
            );
          } else {
            return (
              <li key={index}>
                <ArticleCard article={article} />
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
