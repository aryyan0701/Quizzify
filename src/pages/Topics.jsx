import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Javascript from "./Javascript";
import Python from "./Python";
import Css from "./Css";
import ReactJs from "./React";
import Angular from "./Angular";
import Java from "./Java";
import C from "./C";
import Cplus from "./Cplus";
import Php from "./Php";
import Csharpe from "./Csharpe";
import Sql from "./Sql";
import Api from "./Apis";

const Container = "flex flex-wrap justify-around p-5";
const TopicLink =
  "text-decoration-none transition duration-300 ease-in-out text-xl m-2";

const CommonContent = () => {
  return (
    <div className="bg-violet-200 text-violet min-h-screen">
      <Link to="/" className="block">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-4 rounded">
          Back
        </button>
      </Link>

      <h1 className="text-center text-5xl font-bold mb-4">Topics</h1>
      <div className={Container}>
        <div className="flex flex-wrap justify-center sm:justify-center">
        {/* first col */}
        <div className="flex flex-col m-4 text-center w-60">
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <Link to="/topics/c" className={TopicLink}>
                <h4>C Lang</h4>
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 mt-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link to="/topics/javascript" className={TopicLink}>
                <h4>Javascript</h4>
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 mt-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link to="/topics/php" className={TopicLink}>
                <h4>PHP</h4>
              </Link>
            </div>
          </div>
        {/* end */}
        {/* two col */}
          <div className="flex flex-col m-4 text-center w-60">
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <Link to="/topics/C++" className={TopicLink}>
                <h4>C++</h4>
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 mt-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link to="/topics/react" className={TopicLink}>
                <h4>React Js</h4>
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 mt-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link to="/topics/Csharpe" className={TopicLink}>
                <h4>C Sharpe</h4>
              </Link>
            </div>
          </div>
              {/* end */}
        {/* third col */}
          <div className="flex flex-col m-4 text-center w-60">
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <Link to="/topics/python" className={TopicLink}>
                <h4>Python</h4>
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 mt-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link to="/topics/angular" className={TopicLink}>
                <h4>Angular</h4>
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 mt-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link to="/topics/sql" className={TopicLink}>
                <h4>SQL</h4>
              </Link>
            </div>
          </div>
     {/* end */}
        {/* fourth col */}
          <div className="flex flex-col m-4 text-center w-60">
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link to="/topics/java" className={TopicLink}>
                <h4>Java</h4>
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 mt-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link to="/topics/css" className={TopicLink}>
                <h4>Css</h4>
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 mt-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link to="/topics/api" className={TopicLink}>
                <h4>Api</h4>
              </Link>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
      <Outlet />
    </div>
  );
};


const Topics = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CommonContent />} />
        <Route path="javascript/*" element={<Javascript />} />
        <Route path="python/*" element={<Python />} />
        <Route path="css/*" element={<Css />} />
        <Route path="react/*" element={<ReactJs />} />
        <Route path="angular/*" element={<Angular />} />
        <Route path="java/*" element={<Java />} />
        <Route path="c/*" element={<C />} />
        <Route path="c++/*" element={<Cplus />} />
        <Route path="php/*" element={<Php />} />
        <Route path="cSharpe/*" element={<Csharpe />} />
        <Route path="sql/*" element={<Sql />} />
        <Route path="api/*" element={<Api />} />

      </Routes>
    </div>
  );
};

export default Topics;
