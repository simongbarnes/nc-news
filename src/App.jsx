import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import fetchCurrentUser from "./utils/fetchCurrentUser";
import SingleArticle from "./components/SingleArticle";
import NewComment from "./components/NewComment";
import ErrorHandler from "./components/ErrorHandler";
import ArticlesList from "./components/ArticlesList";

function App() {
  const [user, setUser] = useState(fetchCurrentUser());
  const [currentTopic, setCurrentTopic] = useState("home");

  return (
    <>
      <div className="container">
        <Header user={user} currentTopic={currentTopic} setCurrentTopic={setCurrentTopic}/>
        <Routes>
          <Route path="/" element={<ArticlesList currentTopic={currentTopic}/>} />
          <Route path="/home" element={<ArticlesList currentTopic={currentTopic}/>} />
          <Route path="/articles" element={<ArticlesList currentTopic={currentTopic}/>} />
          <Route path="/articles/topics/:topic" element={<ArticlesList currentTopic={currentTopic}/>} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route
            path="/comments/:article_id/new"
            element={<NewComment />}
          />
          <Route path="/error" element={<ErrorHandler />} />
          <Route path="/error/:resource/:status" element={<ErrorHandler />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
