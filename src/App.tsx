import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
//components
import { QuestionCard } from "./components/QuestionCard";
//types
import { Difficulty } from "./API";

const TOTAL_QUESTIONS = 10;

export const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<string[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameover, setGameOver] = useState<boolean>(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  //start game
  const startTrivia = async () => {};

  //check if user answer is correct
  const checkAns = (e: React.MouseEvent<HTMLButtonElement>) => {};

  //trigger next question
  const nextQuestion = () => {};

  return (
    <div>
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers && userAnswers[number]}
        callback={checkAns}
      /> */}
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
};
