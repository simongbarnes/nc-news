import { useEffect, useState } from "react";
import fetchTopics from "../utils/fetchTopics";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ currentTopic, setCurrentTopic }) {
  const [topics, setTopics] = useState(true);
  const [topicsLoading, setTopicsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTopics()
      .then((response) => {
        setTopics(response.data.topics);
        setTopicsLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          navigate(`/error/topics/${error.response.status}`);
        } else {
          navigate("/error/articles/noresponse");
        }
      });
  }, []);

  if (topicsLoading) return <p>Loading Nav Bar...</p>;

  return (
    <>
      <nav className="flex flex-row bg-gray-800">
        <div className="basis-1/2"></div>
        <button
          className="text-gray-200 bg-gray-800 focus:outline-none focus:font-bold focus:text-white font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
          onClick={() => {
            setCurrentTopic("all");
            navigate("/");
          }}
        >
          home
        </button>
        <div className="flex flex-row">
          {topics.map((topic) => {
            return (
              <button
                className="text-gray-200 bg-gray-800 focus:outline-none focus:font-bold focus:text-white font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
                key={topic.slug}
                onClick={() => {
                  setCurrentTopic(topic.slug);
                  navigate(`/articles/topics/${topic.slug}`);
                }}
              >
                {topic.slug}
              </button>
            );
          })}
        </div>
        <div className="basis-1/2"></div>
      </nav>
    </>
  );
}
