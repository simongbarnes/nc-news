import { useState } from "react";
import updateArticle from "../utils/updateArticle";
import votesImg from "../assets/thumbs-up.png";

export default function VoteAdder({ articleId, votes }) {
  const [newVote, setNewVote] = useState(0);
  const [isError, setError] = useState(false);

  const updateVotes = (value) => {
    setError(false);
    setNewVote((currentVotes) => {
      return currentVotes + value;
    });
    const changes = { inc_votes: value };
    updateArticle(articleId, changes).catch(() => {
      setNewVote(0);
      setError(true);
    });
  };

  return (
    <>
      <section className="flex flex-row text-md">
        <div className="basis-1/2"></div>
        <div className="basis-6">
          <img src={votesImg} alt="a thumbs up icon"></img>
        </div>
        <p className="basis-6 pl-3 pr-3">{votes + newVote} </p>
        <button
          className="basis-6 border mr-1 shadow"
          disabled={newVote === 1}
          aria-label="like"
          onClick={() => {
            updateVotes(1);
          }}
        >
          +
        </button>
        <button
          className="basis-6 border shadow"
          disabled={newVote === -1}
          aria-label="dislike"
          onClick={() => {
            updateVotes(-1);
          }}
        >
          -
        </button>
        <div className="basis-1/2 bold text-red-500">
          {isError && <p className="votes-error">error: vote unsuccessful</p>}
        </div>
      </section>
    </>
  );
}
