import { useEffect, useState } from "react";
import dustbinImg from "../assets/dustbin.png";
import deleteComment from "../utils/deleteComment";

export default function CommentDeleter({
  commentId,
  commentAuthor,
  setCommentDeleted,
  commentDeleted,
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
  }, [commentDeleted]);

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
                setCommentDeleted(true);
              })
              .catch((error) => {
                setDeleteBtnDisabled(false);
                setProgressMsg("DELETE FAILED!");
                console.log(error);
              });

            setDeleteBtnDisabled(true);
            setProgressMsg("DELETING...");
          }}
        >
          <img
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
