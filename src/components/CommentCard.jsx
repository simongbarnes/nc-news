import { useState } from "react";
import convertTimeStamp from "../utils/convertTimeStamp";
import CommentDeleter from "./CommentDeleter";

export default function CommentCard({
  comment,
  setCommentsRerender,
  commentsRerender,
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
            setCommentsRerender={setCommentsRerender}
            commentsRerender={commentsRerender}
            setProgressMsg={setProgressMsg}
          />
        </section>
        <p className="text-red-500">{progressMsg}</p>
      </section>
    </>
  );
}
