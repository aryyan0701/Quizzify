import React from "react";

const ShowjavascriptQue = ({ question, options, answerQuestion }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-lg p-6 bg-violet-200 rounded-lg shadow-lg mt-6"> {/* Adjusted max-width and padding */}
        <p className="text-xl font-bold mb-4">{question}</p>
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer bg-white rounded-lg shadow-md p-2 mb-2 hover:bg-gray-400"
              onClick={() => answerQuestion(index)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowjavascriptQue;
