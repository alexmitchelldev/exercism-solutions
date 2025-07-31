const PATTERNS = {
  0: ' _ | ||_|',
  1: '     |  |',
  2: ' _  _||_ ',
  3: ' _  _| _|',
  4: '   |_|  |',
  5: ' _ |_  _|',
  6: ' _ |_ |_|',
  7: ' _   |  |',
  8: ' _ |_||_|',
  9: ' _ |_| _|'
}

function getNumbersArray (numbers) {
  const numbersArray = numbers.split('\n');

  let numberArrays = [];
  if (numbersArray.length > 4) {
    for (let j = 0; j < numbersArray.length; j+= 4) {
      numberArrays.push([numbersArray[j],numbersArray[j + 1],numbersArray[j + 2]]);
    }
  } else {
    numbersArray.pop();
    numberArrays.push(numbersArray);
  }

  return numberArrays;
}

function parseNumbers (numberArrays) {
  let parsedNumbers = {};
  let currentNumber = '';
  let numbers = [];

  numberArrays.forEach((arr) => {
    parsedNumbers = {};
    arr.forEach((row) => {
      for (let i = 0; i < row.length; i += 3) {
        parsedNumbers[i] ? parsedNumbers[i] += row.substring(i, i + 3) : parsedNumbers[i] = row.substring(i, i + 3);
      }
    });

    currentNumber = '';

    Object.values(parsedNumbers).forEach((n) => {
      for (const pattern in PATTERNS) {
        if (PATTERNS[pattern] === n) {
          currentNumber += pattern.toString();
          return;
        }
      }
      currentNumber += '?';
    })

    numbers.push(currentNumber);
  })

  return numbers.join(',');
}

export const convert = (input) => {
  const numberArrays = getNumbersArray(input);
  
  return parseNumbers(numberArrays);
};