import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import fetchComments from "../utils/fetchComments";

export default function CommentList (article){

    const [comments, setComments] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [commentDeleted, setCommentDeleted] = useState(false);
  
    useEffect(() => {
      fetchComments(article.articleId)
      .then((response) => {
        setComments(response.data.comments);
        setCommentDeleted(false);
        setIsLoading(false);
      });
    }, [commentDeleted]);
  
    if (loading) return <p>Loading comments...</p>;
  
    return (
      <>
      <h3>Comments</h3>
        <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} >
              <CommentCard comment={comment} setCommentDeleted={setCommentDeleted} commentDeleted={commentDeleted}/>
            </li>
          );
        })}
      </ul>
      </>
    );

}