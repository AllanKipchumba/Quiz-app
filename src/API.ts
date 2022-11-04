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
  const endpoint = `https://opendb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await await (await fetch(endpoint)).json();

  console.log(data);
};
