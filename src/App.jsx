import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import fetchCurrentUser from "./utils/fetchCurrentUser";
import SingleArticle from "./components/SingleArticle";
import NewComment from "./components/NewComment";
import ErrorHandler from "./components/ErrorHandler";

function App() {

  const [user, setUser] = useState(fetchCurrentUser());

  return (
    <>
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Home />} />
        <Route path="/articles/topics/:topic" element={<Home />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/comments/:article_id/new" element={<NewComment user={user} />} />       
        <Route path="/error" element={<ErrorHandler />} /> 
        <Route path="/error/:resource/:status" element={<ErrorHandler />} /> 
        <Route path="*" element={<Navigate to="/error"/>} />
      </Routes>
    </>
  );
}

export default App;
