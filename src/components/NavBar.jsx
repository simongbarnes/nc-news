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
      <nav className="flex flex-row bg-black">
        <div className="basis-1/2"></div>
        <button
          className="text-lg text-white bg-black focus:outline-none hover:font-bold"
          type="button"
          onClick={() => {
            setCurrentTopic("home");
            navigate("/");
          }}
        >
          home
        </button>
        <div className="flex flex-row">
          {topics.map((topic) => {
            return (
              <button
                className="text-lg text-white bg-black ml-3 focus:outline-none hover:font-bold"
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
