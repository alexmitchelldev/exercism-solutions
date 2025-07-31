export const isIsogram = (word) => {
  let letters = [];
  let wordToLower = word.toLowerCase();
  for (const letter of wordToLower) {
    if(letter !== ' ' && letter !== '-') {
      if (!letters.includes(letter)) {
        letters.push(letter);
      } else {
        return false;
      }
    }
  }
  return true;
};
