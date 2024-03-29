import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Javascript from "./Javascript";
import Python from "./Python";
import Css from "./Css";

const Container = "flex flex-wrap justify-around p-5";
const TopicLink =
  "text-decoration-none transition duration-300 ease-in-out text-xl m-2";

const CommonContent = () => {
  return (
    <div className="bg-violet-200 text-violet min-h-screen">
      <Link to="/" className="block mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-4 rounded">
          Back
        </button>
      </Link>

      <h1 className="text-center text-5xl font-bold mb-4">Topics</h1>
      <div className={Container}>
        <div className="flex justify-center">
          <div className="flex flex-col m-4 text-center w-60">
            <div className="bg-white shadow-md rounded-lg p-4">
              <Link to="/topics/javascript" className={TopicLink}>
                <h4>Javascript</h4>
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 mt-4">
          
            </div>
          </div>

          <div className="flex flex-col m-4 text-center w-60">
            <div className="bg-white shadow-md rounded-lg p-4">
              <Link to="/topics/python" className={TopicLink}>
                <h4>Python</h4>
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 mt-4">
              {/* Content for card 4 */}
            </div>
          </div>

          <div className="flex flex-col m-4 text-center w-60">
            <div className="bg-white shadow-md rounded-lg p-4">
            <Link to="/topics/css" className={TopicLink}>
                <h4>Css</h4>
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 mt-4">
              {/* Content for card 6 */}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
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
