import fetchArticle from "../utils/fetchArticle";
import {Link, useNavigate, useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import convertTimeStamp from "../utils/convertTimeStamp";
import CommentList from "./CommentList";
import VoteAdder from "./VoteAdder";

export default function SingleArticle() {
  const { article_id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({});
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticle(article_id)
      .then(function (response) {
        setArticle(response.data.article);
        setIsLoading(false);
      })
      .catch(function (error) {
        navigate(`/error/articles/${error.response.status}`);
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
      <VoteAdder articleId={article.article_id} votes={article.votes}/>
      <br/>
      <Link to={`/comments/${article.article_id}/new`}>add a comment</Link>
      <CommentList articleId={article.article_id} />
      <Link to={`/comments/${article.article_id}/new`}>add a comment</Link>
      <br/>
      <Link to={"/"}>back to articles</Link>
    </>
  );
}
