import convertTimeStamp from "../utils/convertTimeStamp";
import votesImg from "../assets/thumbs-up.png";

export default function CommentCard(commentArg) {

  return (
    <>
      <section className="comment-container">
          <p className="comment-author">by {commentArg.comment.author}</p>
          <time className="comment-date">{convertTimeStamp(commentArg.comment.created_at)}</time>
          <main className="comment-body">{commentArg.comment.body}</main>
        <div className="comment-pad-left"></div>
        <figure className="comment-vote-icon">
          <img
            src={votesImg}
            alt="a thumbs up icon"
            width="20px"
            height="20px"
          ></img>
        </figure>
          <p className="comment-vote-count">{commentArg.comment.votes}</p>
        <div className="comment-pad-right"></div>
      </section>
    </>
  );
}
