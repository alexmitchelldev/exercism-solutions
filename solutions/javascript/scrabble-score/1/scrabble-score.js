export const score = word => {
  let wordScore = 0;
  let wordToUpperCase = word.toUpperCase();
  const letterScores = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  }

  for (const letter of wordToUpperCase) {
    for (const key in letterScores) {
      if (letterScores[key].includes(letter)) {
        wordScore += Number(key);
      }
    }
  }
  return wordScore;
};
