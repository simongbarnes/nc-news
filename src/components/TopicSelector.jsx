import { useEffect, useState } from "react";
import fetchTopics from "../utils/fetchTopics";
import { useNavigate } from "react-router-dom";

export default function TopicSelector({ currentTopic, setCurrentTopic}) {

  const [topics, setTopics] = useState(true);
  const [topicsLoading, setTopicsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTopics().then((response) => {
      setTopics(response.data.topics);
      setTopicsLoading(false);
    });
  }, []);

  if (topicsLoading) return <p>Loading...</p>;

  return (
    <>
      <form>
        <label htmlFor="selected-topic">Topic: </label>
        <select
          name="topics"
          id="topics"
          value={currentTopic}
          onChange={(event) => {
            console.log(event.target.value, "<===== On CHANGE")
            // console.log(value, "<===== Value")
            if (event.target.value === "all"){
                console.log(event.target.value, "Going to /")
                setCurrentTopic(event.target.value)
                navigate('/')
            } else {
                console.log(event.target.value, `Going to /articles/${event.target.value}`)
                setCurrentTopic(event.target.value)
                navigate(`/articles/${event.target.value}`)
            }
          }}
        >
          <option key="all" value="all">all topics</option>
          {topics.map((topic) => {
            return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>;
          })}
        </select>
      </form>
    </>
  );
}
