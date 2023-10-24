import fetchArticle from "../utils/fetchArticle";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import convertTimeStamp from "../utils/convertTimeStamp";
import heart from "../assets/heart-fill.png";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [votes, setVotes] = useState("");
  const [date, setDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticle(article_id)
      .then(function (response) {
        const article = response.data.article;
        setTitle(article.title);
        setAuthor(article.author);
        setDate(convertTimeStamp(article.created_at));
        setVotes(article.votes);
        setImgUrl(article.article_img_url);
        setBody(article.body);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="singleArticleImage">
        <img
          src={imgUrl}
          alt="image to illustrate article"
          width="450px"
          height="300px"
        ></img>
      </div>
      <div className="singleArticleTitle">
        <h2>{title}</h2>
      </div>
      <div className="singleArticleAuthorDate">
        <p>
          by {author} {date}
        </p>
      </div>
      <article className="singleArticleBody">
        <p>{body}</p>
      </article>
      <div className="votes-container">
        <div className="votes-empty-left"></div>
        <div className="votes-items-icon">
          <img
            src={heart}
            alt="icon indicating that the adjacent number is a count of votes"
            width="20px"
            height="20px"
          ></img>
        </div>
        <div className="votes-items-count">
          <div>{votes}</div>
        </div>
        <div className="votes-empty-right"></div>
      </div>
    </>
  );
}
