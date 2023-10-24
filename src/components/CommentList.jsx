import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import fetchComments from "../utils/fetchComments";

export default function CommentList (article){

    const [comments, setComments] = useState([]);
    const [loading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetchComments(article.articleId).then((response) => {
        setComments(response.data.comments);
        setIsLoading(false);
      });
    }, []);
  
    if (loading) return <p>Loading comments...</p>;
  
    return (
      <>
      <h3>Comments</h3>
        <ul>
        {comments.map((comment, index) => {
          return (
            <li key={index} >
              <CommentCard comment={comments[index]} />
            </li>
          );
        })}
      </ul>
      </>
    );

}