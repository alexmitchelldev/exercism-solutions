//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  let numberString = number.toString();
  let numberLength = numberString.length;
  let total = 0;
  for (let i = 0; i < numberLength; i++) {
    total += Math.pow(Number(numberString[i]), numberLength);
  }
  if (total === number) {
    return true;
  } else {
    return false;
  }
};
