import convertTimeStamp from "../utils/convertTimeStamp";
import heart from "../assets/heart-fill.png";

export default function CommentCard(commentArg) {

  return (
    <>
      <div className="comment-container">
        <div className="comment-author">
          <div>by {commentArg.comment.author}</div>
        </div>
        <div className="comment-date">
          <div>{convertTimeStamp(commentArg.comment.created_at)}</div>
        </div>
        <article className="comment-body">
          <div>{commentArg.comment.body}</div>
        </article>
        <div className="comment-pad-left"></div>
        <div className="comment-vote-icon">
          <img
            src={heart}
            alt="a red heart icon"
            width="20px"
            height="20px"
          ></img>
        </div>
        <div className="comment-vote-count">
          <div>{commentArg.comment.votes}</div>
        </div>
        <div className="comment-pad-right"></div>
      </div>
    </>
  );
}
