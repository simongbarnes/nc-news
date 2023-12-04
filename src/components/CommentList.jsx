import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import fetchComments from "../utils/fetchComments";
import NewComment from "./NewComment";

export default function CommentList (article){

    const [comments, setComments] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [commentsRerender, setCommentsRerender] = useState(false);
  
    useEffect(() => {
      fetchComments(article.articleId)
      .then((response) => {
        setComments(response.data.comments);
        setCommentsRerender(false);
        setIsLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          navigate(`/error/comments/${error.response.status}`);
        } else {
          navigate("/error/articles/noresponse");
        }
      });
    }, [commentsRerender]);
  
    if (loading) return <p>Loading comments...</p>;
  
    return (
      <>
      <NewComment setCommentsRerender={setCommentsRerender} commentsRerender={commentsRerender}/>
      <h3 className="font-bold p-4">Comments</h3>
        <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} >
              <CommentCard comment={comment} setCommentsRerender={setCommentsRerender} commentsRerender={commentsRerender}/>
            </li>
          );
        })}
      </ul>
      </>
    );

}