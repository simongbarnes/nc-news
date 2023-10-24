import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import fetchArticles from "../utils/fetchArticles";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setIsLoading] = useState(true);

  // useEffect(() => {
  //     fetchArticles()
  //     .then(function (response) {
  //       // handle success
  //     //   console.log(response.data.articles)
  //       setArticles(response.data.articles);
  //     // setTitle(article.title);
  //       // setAuthor(article.author);
  //       // setDate(article.created_at);
  //       // setVotes(article.votes);
  //     //   setcommentCount(article.comment_count);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  //   }, []);

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
