import React, { useState } from 'react';
import ShowphpQue from '../components/ReactQue';
import { phpQuestions } from '..//data/Ques';
import { Link } from 'react-router-dom';


const Php = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionAttemptVerdictArray, setQuestionAttemptVerdictArray] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  function answerQuestion(index) {
    const isCorrect = phpQuestions[currentQuestionIndex]?.answer.includes(index);

    setQuestionAttemptVerdictArray((arr) => [...arr, { index: currentQuestionIndex, isCorrect }]);

    if (isCorrect) {
      setCorrectAnswers((count) => count + 1);
    }

    setCurrentQuestionIndex((idx) => idx + 1);
  }

  console.log(questionAttemptVerdictArray);

  return (
    <div className="container"> 
    <Link to="/topics">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back
        </button>
    </Link>
    <div>
        {currentQuestionIndex < phpQuestions.length ? (
            <>
                <p className="text-2xl font-bold mt-4 md:mt-0 md:text-right md:px-4">
                    Correct Answers: <span>{correctAnswers}</span> /{' '}
                    {phpQuestions.length}
                </p>

                <div>
                    <p className="text-2xl font-bold">
                        Question: {currentQuestionIndex + 1}
                    </p>
                    <ShowphpQue
                        {...phpQuestions[currentQuestionIndex]}
                        answerQuestion={answerQuestion}
                    />
                </div>
            </>
        ) : (
            <div className="mt-36 text-center">
                <h3 className="text-2xl font-bold">Final Score</h3>
                <p className="text-6xl font-bold">
                    <span>{correctAnswers}</span> / {phpQuestions.length}
                </p>
                        <Link to="/topics">
                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-8">
                         Reset
                        </button>
                         </Link>
            </div>
        )}
    </div>
</div>
  );
};

export default Php;
