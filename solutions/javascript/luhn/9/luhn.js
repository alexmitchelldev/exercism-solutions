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
  for (const char of number) {
    result.push(Number(char));
  }
  let reversedResult = result.reverse();

  return reversedResult.map((digit, index) => {
    return index % 2 !== 0 ? (digit * 2 > 9 ? (digit * 2) - 9 : digit * 2) : digit;
  });
};

export const valid = string => {
  const strippedSpaces    = stripAwaySpaces(string);
  const doubledDigits     = doubleEverySecondDigit(strippedSpaces);
  const sumOfDigits       = doubledDigits.reduce((total, number) => total + number);

  return (checkForLengthLessThanOne(string) || checkForDigitWithSpace(string) || !checkForNonDigits(strippedSpaces)) ? false : (sumOfDigits % 10 === 0);
};