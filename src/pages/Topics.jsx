import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Javascript from "./Javascript";
import Python from "./Python";
import Css from "./Css";

const Container = "flex flex-wrap justify-around p-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white";
const TopicLink =
  "text-decoration-none transition duration-300 ease-in-out text-xl m-2";

const CommonContent = () => {
  return (
    <>
      <Link to="/" className="block mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-4 rounded">
          Back
        </button>
      </Link>

      <h1 className="text-center">Topics</h1>
      <div className={Container}>
        <Link to="/topics/javascript" className={TopicLink}>
          <h4>Javascript</h4>
        </Link>
        <Link to="/topics/python" className={TopicLink}>
          <h4>Python</h4>
        </Link>
        <Link to="/topics/css" className={TopicLink}>
          <h4>Css</h4>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

const Topics = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CommonContent />} />
        <Route path="javascript/*" element={<Javascript />} />
        <Route path="python/*" element={<Python />} />
        <Route path="css/*" element={<Css />} />
      </Routes>
    </>
  );
};

export default Topics;
