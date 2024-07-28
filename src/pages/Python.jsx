import React from "react";
import { pythonQuestions } from "../data/Ques";
import { Link } from "react-router-dom";
import useQuiz from "../hooks/useQuiz";

const Python = () => {
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    questionAttemptVerdictArray,
    setQuestionAttemptVerdictArray,
    correctAnswers,
    setCorrectAnswers,
  } = useQuiz();

  function answerQuestion(index) {
    const isCorrect =
      pythonQuestions[currentQuestionIndex]?.answer.includes(index);

    setQuestionAttemptVerdictArray((arr) => [
      ...arr,
      { index: currentQuestionIndex, isCorrect },
    ]);

    if (isCorrect) {
      setCorrectAnswers((count) => count + 1);
    }

    setCurrentQuestionIndex((idx) => idx + 1);
  }

  function resetQuiz() {
    setCurrentQuestionIndex(0);
    setQuestionAttemptVerdictArray([]);
    setCorrectAnswers(0);
  }

  const currentQuestion = pythonQuestions[currentQuestionIndex];
  const { question, options } = currentQuestion || {};

  return (
    <div className="container">
      <Link to="/topics">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back
        </button>
      </Link>
      <div>
        {currentQuestionIndex < pythonQuestions.length ? (
          <>
            <p className="text-2xl font-bold mt-4 md:mt-0 md:text-right md:px-4">
              Correct Answers: <span>{correctAnswers}</span> /{" "}
              {pythonQuestions.length}
            </p>

            <div>
              <p className="text-2xl font-bold">
                Question: {currentQuestionIndex + 1}
              </p>
              <div className="flex flex-col items-center justify-center h-screen">
                <div className="max-w-lg p-6 bg-violet-200 rounded-lg shadow-lg">
                  <p className="text-xl font-bold mb-4">{question}</p>
                  <ul>
                    {options.map((option, index) => (
                      <li
                        key={index}
                        className="cursor-pointer bg-white rounded-lg shadow-md p-2 mb-2 hover:bg-gray-300"
                        onClick={() => answerQuestion(index)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-36 text-center">
            <h3 className="text-2xl font-bold">Final Score</h3>
            <p className="text-6xl font-bold">
              <span>{correctAnswers}</span> / {pythonQuestions.length}
            </p>
            <Link to="/topics">
              <button onClick={resetQuiz} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-8">
                Reset
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Python;
