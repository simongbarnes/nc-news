import { useState } from "react";
import convertTimeStamp from "../utils/convertTimeStamp";
import votesImg from "../assets/thumbs-up.png";
import CommentDeleter from "./CommentDeleter";

export default function CommentCard({comment, setCommentDeleted, commentDeleted}) {

  const [progressMsg, setProgressMsg] = useState("");

  return (
    <>
      <section className="comment-container">
          <p className="comment-author">by {comment.author}</p>
          <time className="comment-date">{convertTimeStamp(comment.created_at)}</time>
          <main className="comment-body">{comment.body}</main>
        <div className="comment-pad-left"></div>
        <figure className="comment-vote-icon">
          <img
            src={votesImg}
            alt="a thumbs up icon"
            width="20px"
            height="20px"
          ></img>
        </figure>
          <p className="comment-vote-count">{comment.votes}</p>
        <section className="comment-delete">
        <CommentDeleter commentId={comment.comment_id} commentAuthor={comment.author} setCommentDeleted={setCommentDeleted} commentDeleted={commentDeleted}setProgressMsg={setProgressMsg}/>
        </section>
        <p className="progress-message">{progressMsg}</p>
      </section>
    </>
  );
}
