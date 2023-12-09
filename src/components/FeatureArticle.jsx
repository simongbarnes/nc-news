import fetchArticle from "../utils/fetchArticle";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import convertTimeStamp from "../utils/convertTimeStamp";
import takeExcerpt from "../utils/takeExcerpt";

export default function FeatureArticle({ articleId }) {
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
      <section>
        <figure className="pb-4">
          <img
            src={article.article_img_url}
            alt="image to illustrate article"
          ></img>
        </figure>
        <h2 className="text-xl font-bold pb-3">{article.title}</h2>
        <div className="flex flex-row pb-4">
        <p className="basis-1/2 text-left">
          by {article.author}
        </p>  
        <p className="basis-1/2 text-right">
          {convertTimeStamp(article.created_at)}
        </p>        
        </div>
        <main className="pb-4">
          <p>{takeExcerpt(article.body,500)}</p>
        </main>
        <div className="text-right underline">
          <Link to={`/articles/${articleId}`}>
            read full article and comments
          </Link>
        </div>
      </section>
    </>
  );
}
