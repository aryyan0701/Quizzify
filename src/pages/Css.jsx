import React, { useState } from 'react';
import ShowcssQue from '../components/CssQue';
import { cssQuestions } from '../data/Ques';
import { Link } from 'react-router-dom';

const Container = 'mt-8';
const AnswerCounter = 'text-2xl font-bold text-right px-4';
const QuestionContainer = 'my-6 px-2';
const FinalScoreContainer = 'mt-24 mx-auto w-1/2 text-center';
const FinalScoreText = 'text-4xl';
const FinalScoreCounter = 'text-7xl font-bold';

const Css = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionAttemptVerdictArray, setQuestionAttemptVerdictArray] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  function answerQuestion(index) {
    const isCorrect = cssQuestions[currentQuestionIndex]?.answer.includes(index);

    setQuestionAttemptVerdictArray((arr) => [...arr, { index: currentQuestionIndex, isCorrect }]);

    if (isCorrect) {
      setCorrectAnswers((count) => count + 1);
    }

    setCurrentQuestionIndex((idx) => idx + 1);
  }

  console.log(questionAttemptVerdictArray);

  return (
    <>
      <Link to="/topics">
        <button className="py-2 px-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Back</button>
      </Link>
      <div className={Container}>
        {currentQuestionIndex < cssQuestions.length ? (
          <>
            <p className={AnswerCounter}>
              Correct Answers: <span data-testid="quiz-answer-counter">{correctAnswers}</span> / {cssQuestions.length}
            </p>

            <div className={QuestionContainer}>
              <p>Question: {currentQuestionIndex + 1}</p>
              <ShowcssQue {...cssQuestions[currentQuestionIndex]} answerQuestion={answerQuestion} />
            </div>
          </>
        ) : (
          <div className={FinalScoreContainer}>
            <h3 className={FinalScoreText}>Final Score</h3>
            <p className={FinalScoreCounter}>
              <span data-testid="final-answer-counter">{correctAnswers}</span> / {cssQuestions.length}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Css;
