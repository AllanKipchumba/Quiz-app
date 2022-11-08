import axios from "axios";
import { shuffleArray } from "./utils";

export interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

//create new type that has all properties of the question type and adds answers type
export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  //string literal types
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
//FETCH QUESTIONS FROM TRIVIA API

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  //fetch question from trivia api
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  return await axios
    .get(endpoint)
    .then((data) => {
      const { results } = data.data;

      return results.map((question: Question) => ({
        //return individual question and answer
        ...question,
        //shuffle the position of correct and incorrect answers in every question  there are for the following
        answers: shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer,
        ]),
      }));
    })
    .catch((error) => console.log(error));
};
