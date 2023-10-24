import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import convertTimeStamp from "../utils/convertTimeStamp";
import heart from "../assets/heart-fill.png"
import comment from "../assets/comment.png"

export default function ArticleCard(article) {
  const [articleId, setArticleId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [votes, setVotes] = useState("");
  const [commentCount, setCommentCount] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    setArticleId(article.article.article_id)
    setTitle(article.article.title);
    setAuthor(article.article.author);
    setDate(convertTimeStamp(article.article.created_at));
    setVotes(article.article.votes);
    setCommentCount(article.article.comment_count);
    setImgUrl(article.article.article_img_url);
  }, []);

  return (
    <>
      <div className="articleCardGrid">
        <div className="articleCardTitle">
          <Link to={`/articles/${articleId}`}>{title}</Link>
        </div>
        <div className="articleCardAuthor">
          <div>by {author}</div>
        </div>
        <div className="articleCardDate">
          <div>{date}</div>
        </div>
        <div className="articleCardVotesIcon">
          <img className="thumbnail" src={heart} alt="a red heart icon" width="20px" height="20px"></img>
        </div>
        <div className="articleCardVotes">
          <div>{votes}</div>
        </div>
        <div className="articleCardCommentsIcon">
          <img src={comment} alt="comments icon" width="20px" height="20px"></img>
        </div>      
        <div className="articleCardComments">
          <div>{commentCount}</div>
        </div>
        <div className="articleCardImgCell">
          <img src={imgUrl} alt="image to illustrate article" width="150px" height="100px"></img>
        </div>
      </div>
    </>
  );
}