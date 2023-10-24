import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import fetchCurrentUser from "./utils/fetchCurrentUser";

function App() {

  const [user, setUser] = useState(fetchCurrentUser());

  return (
    <>
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
