import { useState } from "react";
import { useParams } from "react-router-dom";
import ArticlesList from "./ArticlesList";

export default function Home() {

  // let currentTopic = "all"
  const { topic } = useParams();

  // if (topic){
  //   currentTopic = topic;
  // }

  const newTopic = topic ? topic : "all";

  console.log( newTopic, "<== Home")

  return (
    <>
        <ArticlesList topic={newTopic}/>
    </>
  );
}
