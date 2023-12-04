import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import fetchCurrentUser from "./utils/fetchCurrentUser";
import SingleArticle from "./components/SingleArticle";
import NewComment from "./components/NewComment";
import ErrorHandler from "./components/ErrorHandler";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState(fetchCurrentUser());
  const [currentTopic, setCurrentTopic] = useState("all");

  return (
    <>
      <div className="container">
        <Header user={user} />
        <NavBar currentTopic={currentTopic} setCurrentTopic={setCurrentTopic}/>
        <Routes>
          <Route path="/" element={<Home currentTopic={currentTopic} setCurrentTopic={setCurrentTopic}/>} />
          <Route path="/home" element={<Home currentTopic={currentTopic} setCurrentTopic={setCurrentTopic}/>} />
          <Route path="/articles" element={<Home currentTopic={currentTopic} setCurrentTopic={setCurrentTopic}/>} />
          <Route path="/articles/topics/:topic" element={<Home currentTopic={currentTopic} setCurrentTopic={setCurrentTopic}/>} />
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
