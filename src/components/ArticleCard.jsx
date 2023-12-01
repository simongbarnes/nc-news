import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import convertTimeStamp from "../utils/convertTimeStamp";
import votesImg from "../assets/thumbs-up.png";
import comment from "../assets/comment.png";

export default function ArticleCard(article) {
  const [articleId, setArticleId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [votes, setVotes] = useState("");
  const [commentCount, setCommentCount] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    setArticleId(article.article.article_id);
    setTitle(article.article.title);
    setAuthor(article.article.author);
    setDate(convertTimeStamp(article.article.created_at));
    setVotes(article.article.votes);
    setCommentCount(article.article.comment_count);
    setImgUrl(article.article.article_img_url);
  }, [article]);

  return (
    <>
      <section className="flex flex-row">
        <div className="basis-3/4">
          <header className="articleCardTitle">
            <Link to={`/articles/${articleId}`}>{title}</Link>
          </header>
          <p className="articleCardAuthor">by {author}</p>
          <time className="articleCardDate">{date}</time>
          <img
            className="articleCardVotesIcon"
            src={votesImg}
            alt="a thumbs up icon"
            width="20px"
            height="20px"
          ></img>
          <p className="articleCardVotes">{votes}</p>
          <img
            className="articleCardCommentsIcon"
            src={comment}
            alt="comments icon"
            width="20px"
            height="20px"
          ></img>
          <p className="articleCardComments">{commentCount}</p>
        </div>
        <figure className="basis-1/4">
          <img
            src={imgUrl}
            alt="image to illustrate article"
          ></img>
        </figure>
      </section>
    </>
  );
}
