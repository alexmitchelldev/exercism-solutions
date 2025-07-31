//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (letter) => {
  let diamond = [];
  if (letter === 'A') {
    diamond.push('A');
    return diamond;
  }

  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letterPosition = ALPHABET.indexOf(letter);
  const numRows = letterPosition * 2 + 1;
  const middle = Math.floor(numRows / 2);
  let i, j;

  //initialize diamond
  for (i = 0; i < numRows; i++) {
    diamond.push('');
  }

  for (i = 0; i < numRows; i++) {
   for (j = 0; j < numRows; j++) {

    if (i === 0 || i === numRows - 1) {
      if (j === letterPosition) {
        diamond[i] += 'A';
      } else {
        diamond[i] += ' ';
      }
    } else {
      let currentLetter = i <= letterPosition ? ALPHABET[i] : ALPHABET[letterPosition - (i - letterPosition)];

      let currentLetterPositions = i <= letterPosition ? [letterPosition - i, letterPosition + i] : [i - middle, numRows - (i - middle) - 1];

      if (j === currentLetterPositions[0] || j === currentLetterPositions[1]) {
        diamond[i] += currentLetter;
      } else {
        diamond[i] += ' ';
      }
    }
   } 
  }

  console.log(diamond);

  return diamond;
};
