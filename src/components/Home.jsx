import { useState } from "react";
import { useParams } from "react-router-dom";
import ArticlesList from "./ArticlesList";

export default function Home({currentTopic, setCurrentTopic}) {

  const { topic } = useParams();
  const newTopic = topic ? topic : "all";

  return (
    <>
        <ArticlesList currentTopic={currentTopic} setCurrentTopic={setCurrentTopic}/>
    </>
  );
}
