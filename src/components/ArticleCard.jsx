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
      <section className="flex flex-row p-4 border-b border-gray-100">
        <div className="basis-3/4">
          <header className="font-bold pb-3">
            <Link to={`/articles/${articleId}`}>{title}</Link>
          </header>
          <div className="flex flex-row text-sm">
            <p className="basis-1/2">by {author}</p>
            <time className="basis-1/2">{date}</time>
            <div className="basis-5">
              <img
                src={votesImg}
                alt="a thumbs up icon"
              ></img>
            </div>
            <p className="basis-10 text-center">{votes}</p>
            <div className="basis-5">
            <img src={comment} alt="comments icon"></img>
            </div>
            <p className="basis-10 text-center">{commentCount}</p>
          </div>
        </div>
        <figure className="basis-1/4">
          <img src={imgUrl} alt="image to illustrate article"></img>
        </figure>
      </section>
    </>
  );
}
