import { useState } from "react";
import { postComment } from "../utils/postComment";
import { useNavigate, useParams, Link } from "react-router-dom";
import fetchCurrentUser from "../utils/fetchCurrentUser";

export default function NewComment() {
  const [inputBody, setInputBody] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [postBtnDisabled, setPostBtnDisabled] = useState(false);
  const navigate = useNavigate();
  const { article_id } = useParams();

  const addNewComment = (e) => {
    e.preventDefault();

    if (inputBody.trim().length === 0) {
      setErrorMsg("You can't post an empty comment");
    } else {
      console.log(fetchCurrentUser());
      postComment({
        body: inputBody,
        username: fetchCurrentUser().username,
        articleId: article_id,
      })
        .then((response) => {
          setErrorMsg("post successful!");
        })
        .catch((error) => {
          setPostBtnDisabled(false);
          if (error.response) {
            if (error.response.status === 404) {
              setErrorMsg("Post failed! Article does not exist");
            } else {
              if (error.response.status === 400) {
                setErrorMsg("Post failed! Article ID invalid");
              } else {
                setErrorMsg("Post failed!");
              }
            }
          } else {
            navigate("/error/articles/noresponse");
          }
        });

      setPostBtnDisabled(true);
      setErrorMsg("posting in progress...");
    }
  };

  return (
    <div className="p-4 border-b border-grey-100">
      <form onSubmit={addNewComment}>
        <h3 className="font-bold mb-2">Add a comment</h3>
        <label htmlFor="comment-body"></label>
        <textarea
          className="w-full rounded-lg shadow-sm border-gray-300"
          id="comment-body"
          name="comment-body"
          rows="3"
          value={inputBody}
          disabled={postBtnDisabled}
          onChange={(e) => {
            setInputBody(e.target.value);
            setErrorMsg("");
          }}
        />
        <div className="flex flex-flow">
          <div className="basis-1/2 text-right">
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" id="cancelBtn" disabled={postBtnDisabled} type="button">
              cancel
            </button>
          </div>
          <div className="basis-1/2 text-left">
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" id="submitBtn" disabled={postBtnDisabled} type="submit">
              post
            </button>
          </div>
        </div>
      </form>
      <p className="text-red-500" id="errorMsg">
        {errorMsg}
      </p>
    </div>
  );
}
