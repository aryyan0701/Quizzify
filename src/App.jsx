import React from "react";
import './App.css'
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/topics/*" element={<Topics  />} />
        </Routes>\
      </Router>
    </>
  );
};

export default App;
