import { useState } from "react";
import updateArticle from "../utils/updateArticle";

export default function VoteAdder({ articleId, votes }) {
  const [newVote, setnewVote] = useState(0);
  const [isError, setError] = useState(false);

  const updateVotes = (value) => {
    setnewVote((currentVotes) => {
      return currentVotes + value;
    });
    const changes = { inc_votes: value };
    updateArticle(articleId, changes).catch(() => {
      setnewVote(0);
      setError(true);
    });
  };

  return (
    <>
      <section className="votes-container">
        <div className="votes-empty-left"></div>
        <p className="votes-items-count">votes {votes + newVote} </p>
        <button className="votes-button-upvote"
          disabled={newVote === 1}
          aria-label="like"
          onClick={() => {
            updateVotes(1);
          }}
        >
          +
        </button>
        <button className="votes-button-downvote"
          disabled={newVote === -1}
          aria-label="dislike"
          onClick={() => {
            updateVotes(-1);
          }}
        >
          -
        </button>
        <div className="votes-empty-right"></div>
        {isError && <p>error: voting unavailable</p>}
      </section>
    </>
  );
}
