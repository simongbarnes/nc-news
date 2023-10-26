import { useState } from "react";
import { useParams } from "react-router-dom";
import ArticlesList from "./ArticlesList";

export default function Home() {

  const { topic } = useParams();

  const newTopic = topic ? topic : "all";

  return (
    <>
        <ArticlesList topic={newTopic}/>
    </>
  );
}
