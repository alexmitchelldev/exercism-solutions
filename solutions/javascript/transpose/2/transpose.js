const findLongestArrayElement = array => {
  let longestArrayElement = 0;

  for (const element of array) {
    if (element.length > longestArrayElement) {
      longestArrayElement = element.length;
    }
  }

  return longestArrayElement;
};

export const transpose = input => {
  let result = [];

  let loopLength = findLongestArrayElement(input);

  for (let i = 0; i < loopLength; i++) {
    let row = '';
    for (let j = 0; j < input.length; j++) {
      if (input[j][i]) {
        row += input[j][i];
      }
    }

    let spaces = '';

    if (row.length < loopLength) {
      for (let k = 0; k < (input.length - row.length); k++) {
        spaces += ' ';
      }
    }

    let rowWithSpaces = `${spaces}${row}`;
    result.push(rowWithSpaces);
    row = '';
    }

  return result;
    
}

  
