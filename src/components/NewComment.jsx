import { useState } from "react";
import { postComment } from "../utils/postComment";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function NewComment(user) {
  const [inputBody, setInputBody] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [postBtnDisabled, setPostBtnDisabled] = useState(false);
  const [returnLinkText, setReturnLinkText] = useState("cancel");
  const { article_id } = useParams();

  const addNewComment = (e) => {
    e.preventDefault();

    if (inputBody.trim().length === 0) {
      setErrorMsg("You can't post an empty comment");
    } else {
      postComment({
        body: inputBody,
        username: user.user.username,
        articleId: article_id,
      })
        .then((response) => {
          setReturnLinkText("return to article");
          setErrorMsg("post successful!");
        })
        .catch((error) => {
          setPostBtnDisabled(false);
          setErrorMsg("post failed!");
        });

      setPostBtnDisabled(true);
      setErrorMsg("posting in progress...");
    }
  };

  return (
    <div className="Form">
      <form onSubmit={addNewComment}>
        <h3>Add a comment</h3>
        <label htmlFor="comment-body"></label>
        <textarea 
        id="comment-body" 
        name="comment-body" 
        rows="20" 
        cols="30" 
        value={inputBody}
        disabled={postBtnDisabled}
        onChange={(e) => {
          setInputBody(e.target.value);
          setErrorMsg("");
        }}
        />
        <br />
        <button id="submitBtn" disabled={postBtnDisabled} type="submit">
          post
        </button>
        <Link to={`/articles/${article_id}`}>{returnLinkText}</Link>
      </form>
      <p id="errorMsg">{errorMsg}</p>
    </div>
  );
}
