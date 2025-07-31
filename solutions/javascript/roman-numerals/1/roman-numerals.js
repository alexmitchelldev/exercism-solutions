// import { parse } from "path/posix";

const romanNumerals = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}

const numDigitToRomanDigits = (number, powerOf10) => {
  if (number <= 3) {
    return romanNumerals[powerOf10].repeat(number);
  }

  if (number === 4) {
    return romanNumerals[powerOf10] + romanNumerals[powerOf10 * 5];
  }

  if (number === 5) {
    return romanNumerals[powerOf10 * 5];
  }

  if (number < 9) {
    return romanNumerals[powerOf10 * 5] + romanNumerals[powerOf10].repeat(number - 5);
  }

  return romanNumerals[powerOf10] + romanNumerals[powerOf10 * 10];
};

export const toRoman = number => {
  const digits = number.toString().split('').map(number => parseInt(number)).reverse();

  if (number > 3999) {
    throw new Error (
      'Numbers larger than 3999 cannot be converted'
    )
  }

  let romanNum = '';
  for (let i = 0; i < digits.length; i++) {
    romanNum = numDigitToRomanDigits(digits[i], 10 ** i) + romanNum;
  }

  return romanNum;
};
