import { useState, useEffect } from "react";
import convertTimeStamp from "../utils/convertTimeStamp";
import heart from "../assets/heart-fill.png"
import comment from "../assets/comment.png"

export default function ArticleCard(article) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [votes, setVotes] = useState("");
  const [commentCount, setCommentCount] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
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
          <p>{title}</p>
        </div>
        <div className="articleCardAuthor">
          <p>by {author}</p>
        </div>
        <div className="articleCardDate">
          <p>{date}</p>
        </div>
        <div className="articleCardVotesIcon">
          <img className="thumbnail" src={heart} alt="a red heart icon" width="20px" height="20px"></img>
        </div>
        <div className="articleCardVotes">
          <p>{votes}</p>
        </div>
        <div className="articleCardCommentsIcon">
          <img src={comment} alt="comments icon" width="20px" height="20px"></img>
        </div>      
        <div className="articleCardComments">
          <p>{commentCount}</p>
        </div>
        <div className="articleCardImgCell">
          <img src={imgUrl} alt="image to illustrate article" width="150px" height="100px"></img>
        </div>
      </div>
    </>
  );
}
