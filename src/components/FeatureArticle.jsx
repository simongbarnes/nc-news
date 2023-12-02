import fetchArticle from "../utils/fetchArticle";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import convertTimeStamp from "../utils/convertTimeStamp";

export default function FeatureArticle({ articleId }) {
  console.log(articleId);
  const navigate = useNavigate();
  const [article, setArticle] = useState({});
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticle(articleId)
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
  }, [articleId]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <section className="p-4 border-b border-grey-100">
        <figure className="pb-4">
          <img
            src={article.article_img_url}
            alt="image to illustrate article"
          ></img>
        </figure>
        <h2 className="text-xl font-bold pb-3">{article.title}</h2>
        <p className="pb-3">
          by {article.author} {convertTimeStamp(article.created_at)}
        </p>
        <main className="pb-4">
          <p>{article.body}</p>
        </main>
        <Link to={`/articles/${articleId}`}>read full article and comments</Link>
      </section>
    </>
  );
}
