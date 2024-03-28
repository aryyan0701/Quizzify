import React from "react";

const ShowjavascriptQue = ({ question, options, answerQuestion }) => {
  return (
    <div>
      <p>{question}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => answerQuestion(index)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowjavascriptQue;
