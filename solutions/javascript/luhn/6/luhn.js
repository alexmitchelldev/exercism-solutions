const numbers = '1234567890';

const checkForLengthLessThanOne= string => {
  return string.length <= 1;
}

const checkForDigitWithSpace = string => {
  return numbers.includes(string[1]) && string[0] === ' ';
}

const stripAwaySpaces = string => {
  let result = '';

  for (const letter of string) {
    if (letter !== ' ') {
      result += letter;
    }
  }

  return result;
}

const checkForNonDigits = number => {

  for (const digit of number) {
    if (!numbers.includes(digit)) {
      return false;
    }
  }

  return true;
}

const doubleEverySecondDigit = number => {
  let result = [];

  for (let i = 0; i < number.length; i++) {
    let currentNumber = Number(number[number.length - (i + 1)]);
    if (i % 2 !== 0) {
      let doubledDigit = currentNumber * 2;
      result.push(doubledDigit > 9 ? doubledDigit -9: doubledDigit);
    } else {
      result.push(currentNumber);
    }
  }
  
  return result;
};

export const valid = string => {
  const strippedSpaces    = stripAwaySpaces(string);
  const doubledDigits     = doubleEverySecondDigit(strippedSpaces);
  const sumOfDigits       = doubledDigits.reduce((total, number) => total + number);

  return (checkForLengthLessThanOne(string) || checkForDigitWithSpace(string) || !checkForNonDigits(strippedSpaces)) ? false : (sumOfDigits % 10 === 0);
  
};