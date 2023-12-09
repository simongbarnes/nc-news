import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import fetchArticles from "../utils/fetchArticles";
import toMixedCase from "../utils/toMixedCase";
import SortSelector from "./SortSelector";
import FeatureArticle from "./FeatureArticle";
import buildSortQueryParms from "../utils/buildSortQuery";
import getValidSortQueries from "../utils/getValidSortQueries";

export default function ArticlesList({ currentTopic }) {
  const [articles, setArticles] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let queries = {};

  const [currentSort, setCurrentSort] = useState(getValidSortQueries()[0].label);

  const sortQueryParms = buildSortQueryParms(currentSort);

  queries.topic = currentTopic;
  queries.sort = sortQueryParms.column;
  queries.order = sortQueryParms.order;

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
  }, [currentTopic, currentSort]);

  if (loading) return <p>Loading Articles...</p>;

  return (
    <>
      <div className="flex flex-row bg-white">
        <div className="basis-full text-xl font-bold self-center">{toMixedCase(currentTopic)}</div>
        <div >
          <SortSelector setCurrentSort={setCurrentSort} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <section className="lg:basis-1/2 pb-4 border-b border-grey-100">
          <FeatureArticle articleId={articles[0].article_id} />
        </section>
        <ul className="lg:basis-1/2 border-b border-grey-100">
          {articles.map((article, index) => {
            if (index > 0) {
              return (
                <li key={index}>
                  <ArticleCard article={article} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}
