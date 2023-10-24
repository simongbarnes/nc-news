import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import fetchCurrentUser from "./utils/fetchCurrentUser";
import SingleArticle from "./components/SingleArticle";

function App() {

  const [user, setUser] = useState(fetchCurrentUser());

  return (
    <>
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Home />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
