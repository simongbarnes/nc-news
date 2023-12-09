import { useEffect, useState } from "react";
import dustbinImg from "../assets/dustbin.png";
import deleteComment from "../utils/deleteComment";

export default function CommentDeleter({
  commentId,
  commentAuthor,
  setCommentsRerender,
  commentsRerender,
  setProgressMsg,
}) {
  const [deleteBtnDisabled, setDeleteBtnDisabled] = useState(false);
  const [showDeleteButton, setshowDeleteButton] = useState(false);

  useEffect(() => {
    if (commentAuthor === "grumpy19") {
      setshowDeleteButton(true);
    } else {
      setshowDeleteButton(false);
    }
  }, [commentsRerender]);

  return (
    <>
      {showDeleteButton && (
        <button
          className="comments-button-delete"
          aria-label="delete comment"
          disabled={deleteBtnDisabled}
          onClick={() => {
            deleteComment(commentId)
              .then((response) => {
                setProgressMsg("");
                setCommentsRerender(true);
              })
              .catch((error) => {
                setDeleteBtnDisabled(false);
                setProgressMsg("DELETE FAILED!");
              });

            setDeleteBtnDisabled(true);
            setProgressMsg("DELETING...");
          }}
        >
          <img
            className="dark:invert"
            src={dustbinImg}
            alt="a dustbin icon"
            width="20px"
            height="20px"
          ></img>
        </button>
      )}
    </>
  );
}
