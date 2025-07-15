// src/context/quiz-provider.jsx
import React, { useState } from 'react';
import { QuizContext } from './quiz-context';

const QuizProvider = ({ children }) => {
  const quizData = [
    {
    question: "What is the primary purpose of React?",
    options: [
      "To style web applications",
      "To build user interfaces",
      "To manage databases",
      "To handle server-side logic"
    ],
    answer: "To build user interfaces",
  },
  {
    question: "Which hook is used to manage state in a functional React component?",
    options: [
      "useRef",
      "useEffect",
      "useState",
      "useContext"
    ],
    answer: "useState",
  },
  {
    question: "What is JSX?",
    options: [
      "A server-side language",
      "A CSS preprocessor",
      "A syntax extension for JavaScript",
      "A database query language"
    ],
    answer: "A syntax extension for JavaScript",
  },
  {
    question: "Which of the following is a lifecycle method in React?",
    options: [        
        "useState",
        "render",
        "componentDidMount",    
        "useEffect"
    ],
    answer: "componentDidMount",
  },
  {
    question: "Who developed React?",
    options: [
      "Google",             
        "Facebook",
        "Microsoft",
        "Apple"
    ],
    answer: "Facebook",
  },
  
  ];

  const initialAnswers = quizData.map(() => null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const setAnswerForQuestion = (index, answer) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = answer;
      return newAnswers;
    });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(quizData.map(() => null));
  };

  return (
    <QuizContext.Provider
      value={{
        quizData,
        currentQuestion,
        setCurrentQuestion,
        userAnswers,
        setAnswerForQuestion,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
