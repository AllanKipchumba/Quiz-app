import React from "react";
//components

import { QuestionCard } from "./components/QuestionCard";

export const App = () => {
  const startTrivia = async () => {};

  const checkAns = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div>
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard />
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
};
