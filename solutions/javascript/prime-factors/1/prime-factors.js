export const primeFactors = number => {
  let primeFactors = [];
  let factor = 2;
  while (number !== 1) {
    if (number % factor === 0) {
      primeFactors.push(factor);
      number = number / factor;
      factor = 2;
    } else {
      factor++;
    }
  }
  return primeFactors;
};
