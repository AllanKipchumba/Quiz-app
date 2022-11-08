import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
//components
import { QuestionCard } from "./components/QuestionCard";
//types
import { Difficulty, QuestionState } from "./API";
//styles
import { GlobalStyles } from "./App.styles";
import { Wrapper } from "./App.styles";

export interface AnswerObject {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

export const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameover, setGameOver] = useState<boolean>(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  //start game
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    //fetch questions
    await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
      .then((newQuestions) => {
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  console.log(questions);

  //check if user answer is correct
  const checkAns = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameover) {
      //user answer
      const answer = e.currentTarget.value;
      // check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      //add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      //save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  //trigger next question
  const nextQuestion = () => {
    //move onto the next question if not the last question
    const nextQuestion = number + 1;

    nextQuestion === TOTAL_QUESTIONS
      ? setGameOver(true)
      : setNumber(nextQuestion);
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <h1>REACT QUIZ</h1>
        {
          // start game when game is over or when user has attempted all questions
          gameover || userAnswers.length === TOTAL_QUESTIONS ? (
            <button className="start" onClick={startTrivia}>
              Start
            </button>
          ) : null
        }

        {!gameover && <p className="score">Score: {score}</p>}
        {loading && <p>Loading Questions ...</p>}
        {!loading && !gameover && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers && userAnswers[number]}
            callback={checkAns}
          />
        )}

        {!gameover &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS && (
            <button onClick={nextQuestion}>Next</button>
          )}
      </Wrapper>
    </>
  );
};
