import { useState } from "react";

const useQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionAttemptVerdictArray, setQuestionAttemptVerdictArray] =useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  return {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    questionAttemptVerdictArray,
    setQuestionAttemptVerdictArray,
    correctAnswers,
    setCorrectAnswers,
  };
};

export default useQuiz;
