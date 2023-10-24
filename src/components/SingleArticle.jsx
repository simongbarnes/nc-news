import fetchArticle from "../utils/fetchArticle";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import convertTimeStamp from "../utils/convertTimeStamp";
import heart from "../assets/heart-fill.png";
import CommentList from "./CommentList";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticle(article_id)
      .then(function (response) {
        setArticle(response.data.article);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
    <Link to={`/`}>back to articles</Link>
      <figure className="singleArticleImage">
        <img
          src={article.article_img_url}
          alt="image to illustrate article"
          width="450px"
          height="300px"
        ></img>
      </figure>
        <h2 className="singleArticleTitle">{article.title}</h2>
        <p className="singleArticleAuthorDate">
          by {article.author} {convertTimeStamp(article.created_at)}
        </p>
      <main className="singleArticleBody">
        <p>{article.body}</p>
      </main>
      <section className="votes-container">
        <div className="votes-empty-left"></div>
        <figure className="votes-items-icon">
          <img
            src={heart}
            alt="icon indicating that the adjacent number is a count of votes"
            width="20px"
            height="20px"
          ></img>
        </figure>
        <figure className="votes-items-count">
          <div>{article.votes}</div>
        </figure>
        <div className="votes-empty-right"></div>
      </section>
      <CommentList articleId={article.article_id} />
      <Link to={`/`}>back to articles</Link>
    </>
  );
}
