export const isValid = (isbn) => {
  isbn = isbn.replace(/\-/g, '');

  if (isbn.length !== 10) {
    return false;
  }

  const hasCheckDigitX = isbn[isbn.length - 1] === 'X';
  let multiplier;

  const sum = isbn.split('').reduce((total, currentValue, index) => {
    multiplier = 10 - index;
    currentValue = Number(currentValue);

    if (hasCheckDigitX) {
      currentValue = (index === isbn.length - 1) ? 20 : currentValue += 10;
    }

    return total + currentValue * multiplier;
  }, 0);

  return sum % 11 === 0;
};
