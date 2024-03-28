import React, { useState } from 'react';
import ShowjavascriptQue from '../components/JavascriptQue';
import { javascriptQuestions } from '../data/Ques';
import { Link } from 'react-router-dom';

const Javascript = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionAttemptVerdictArray, setQuestionAttemptVerdictArray] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    function answerQuestion(index) {
        const isCorrect = javascriptQuestions[currentQuestionIndex]?.answer.includes(index);

        setQuestionAttemptVerdictArray((arr) => [...arr, { index: currentQuestionIndex, isCorrect }]);

        if (isCorrect) {
            setCorrectAnswers((count) => count + 1);
        }

        setCurrentQuestionIndex((idx) => idx + 1);
    }

    return (
        <div className="container mx-auto mt-8">
            <Link to="/topics">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back
                </button>
            </Link>
            <div className="mt-8">
                {currentQuestionIndex < javascriptQuestions.length ? (
                    <>
                        <p className="text-xl font-bold">
                            Correct Answers: <span>{correctAnswers}</span> /{' '}
                            {javascriptQuestions.length}
                        </p>

                        <div className="mt-4">
                            <p className="text-xl font-bold">
                                Question: {currentQuestionIndex + 1}
                            </p>
                            <ShowjavascriptQue
                                {...javascriptQuestions[currentQuestionIndex]}
                                answerQuestion={answerQuestion}
                            />
                        </div>
                    </>
                ) : (
                    <div className="mt-24 text-center">
                        <h3 className="text-2xl font-bold">Final Score</h3>
                        <p className="text-6xl font-bold">
                            <span>{correctAnswers}</span> / {javascriptQuestions.length}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Javascript;
