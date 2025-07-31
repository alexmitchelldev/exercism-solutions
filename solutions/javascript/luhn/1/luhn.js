const checkLengthLessThanOne= string => {
  return string.length <= 1;
}

const checkZeroWithSpace = string => {
  return string.length === 2 && string[0] === ' ';
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
  const numbers = '1234567890';

  for (const digit of number) {
    if (!numbers.includes(digit)) {
      return false;
    }
  }

  return true;
}

const doubleEverySecondDigit = number => {
  let result = [];
  // console.log(`number.length: ${number.length}`);
  for (let i = 0; i < number.length; i++) {
    // console.log(`number being checked: ${number[number.length - (i + 1)]}`);
    if (i % 2 !== 0) {
      let doubledDigit = Number(number[number.length - (i + 1)] * 2);
      // console.log(`doubledDigit: ${doubledDigit}`);
      result.push(doubledDigit > 9 ? doubledDigit -9: doubledDigit);
    } else {
      // console.log(`nonDoubledDigit: ${number[number.length - i + 1]}`);
      result.push(Number(number[number.length - (i + 1)]));
    }
  }
  // console.log(`result returned: ${result}`);
  return result;
};

export const valid = string => {
  if (checkLengthLessThanOne(string) || checkZeroWithSpace(string)) {
    return false;
  }

  const strippedSpaces    = stripAwaySpaces(string);
  const nonDigitsCheck    = checkForNonDigits(strippedSpaces);

  const doubledDigits     = doubleEverySecondDigit(strippedSpaces);
  const sumOfDigits       = doubledDigits.reduce((total, number) => total + number);

  return (nonDigitsCheck && sumOfDigits % 10 === 0);
  
};
