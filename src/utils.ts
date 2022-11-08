//shuffle answer so that it is not always gonna be in the same position
export const shuffleArray = (array: any[]) =>
  //randomise the array
  [array].sort(() => Math.random() - 0.5);
