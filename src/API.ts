import axios from "axios";
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
//FETCH QUESTIONS FROM TRIVIA API

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  //   const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  try {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}`;
    const data = await axios.get(endpoint);
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
};
