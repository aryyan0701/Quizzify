import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-violet-200 text-violet">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Answer the Questions</h1>
      </div>
      <div className="text-center">
        <h2 className="text-3xl mb-6">
          Challenge yourself and test your knowledge
        </h2>
        <h3 className="text-xl mb-8">Explore the Topics</h3>
        <Link to="/topics">
          <button className="bg-blue-950 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
            Start Here
          </button>
        </Link>
        </div>
    </div>
  );
}

export default Home;
