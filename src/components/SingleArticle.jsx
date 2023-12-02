import fetchArticle from "../utils/fetchArticle";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import convertTimeStamp from "../utils/convertTimeStamp";
import CommentList from "./CommentList";
import VoteAdder from "./VoteAdder";

export default function SingleArticle() {
  const { article_id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({});
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticle(article_id)
      .then(function (response) {
        setArticle(response.data.article);
        setIsLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          navigate(`/error/articles/${error.response.status}`);
        } else {
          navigate("/error/articles/noresponse");
        }
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="text-right underline mt-2">
        <Link to={"/"}>back to articles</Link>
      </div>
      <div className="flex flex-wrap">
        <section className="lg:basis-1/2 p-4 border-b border-grey-100">
          <figure className="pb-4">
            <img
              src={article.article_img_url}
              alt="image to illustrate article"
            ></img>
          </figure>
          <h2 className="text-2xl font-bold pb-3">{article.title}</h2>
          <div className="flex flex-row pb-4">
            <p className="basis-1/2 text-left">by {article.author}</p>
            <p className="basis-1/2 text-right">
              {convertTimeStamp(article.created_at)}
            </p>
          </div>
          <main className="pb-4">
            <p>{article.body}</p>
          </main>
          <VoteAdder articleId={article.article_id} votes={article.votes} />
          <br />
          <div className="text-right underline">
            <Link to={`/comments/${article.article_id}/new`}>
              add a comment
            </Link>
          </div>
        </section>
        <section className="lg:basis-1/2 ">
          <CommentList articleId={article.article_id} />
          <div className="text-right underline">
            <Link to={`/comments/${article.article_id}/new`}>
              add a comment
            </Link>
          </div>
          <br />
          <div className="text-right underline">
            <Link to={"/"}>back to articles</Link>
          </div>
        </section>
      </div>
    </>
  );
}
