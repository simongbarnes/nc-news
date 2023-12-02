import { useState } from "react";
import convertTimeStamp from "../utils/convertTimeStamp";
import votesImg from "../assets/thumbs-up.png";
import CommentDeleter from "./CommentDeleter";

export default function CommentCard({
  comment,
  setCommentDeleted,
  commentDeleted,
}) {
  const [progressMsg, setProgressMsg] = useState("");

  return (
    <>
      <section className="p-4 border-b border-grey-100">
        <div className="flex flex-row pb-4">
          <p className="basis-1/2 text-left">by {comment.author}</p>
          <time className="basis-1/2 text-right">
            {convertTimeStamp(comment.created_at)}
          </time>
        </div>
        <main>{comment.body}</main>
        <section className="mt-4 text-right">
          <CommentDeleter
            commentId={comment.comment_id}
            commentAuthor={comment.author}
            setCommentDeleted={setCommentDeleted}
            commentDeleted={commentDeleted}
            setProgressMsg={setProgressMsg}
          />
        </section>
        <p className="progress-message">{progressMsg}</p>
      </section>
    </>
  );
}
