const checkForLengthLessThanOne= string => {
  return string.length <= 1;
}

const checkForZeroWithSpace = string => {
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
    let currentNumber = Number(number[number.length - (i + 1)]);
    // console.log(`number being checked: ${number[number.length - (i + 1)]}`);
    if (i % 2 !== 0) {
      let doubledDigit = currentNumber * 2;
      // console.log(`doubledDigit: ${doubledDigit}`);
      result.push(doubledDigit > 9 ? doubledDigit -9: doubledDigit);
    } else {
      // console.log(`nonDoubledDigit: ${number[number.length - i + 1]}`);
      result.push(currentNumber);
    }
  }
  // console.log(`result returned: ${result}`);
  return result;
};

export const valid = string => {
  const strippedSpaces    = stripAwaySpaces(string);

  if (checkForLengthLessThanOne(string) || checkForZeroWithSpace(string) || !checkForNonDigits(strippedSpaces)) {
    return false;
  } else {
    const doubledDigits     = doubleEverySecondDigit(strippedSpaces);
    const sumOfDigits       = doubledDigits.reduce((total, number) => total + number);
    return (sumOfDigits % 10 === 0);
  }  
  
};
