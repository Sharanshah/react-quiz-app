import React, { useContext } from "react";
import { QuizContext } from "../context/quiz-context";

const Result = () => {
  const { quizData, userAnswers, resetQuiz } = useContext(QuizContext);

  // Calculate the score by comparing answers
  const score = quizData.reduce((acc, question, index) => {
    if (userAnswers[index] === question.answer) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p className="score">
        Congratulations! You answered {score} out of {quizData.length} questions correctly.
      </p>
      <p className="score-details">
        Your Score: {score} / {quizData.length}
      </p>
      <button className="restart-button" onClick={resetQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;