const generateFactors = number => {
  let factors = [];

  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      factors.push(i);
    } else if (number === 1) {
      factors.push(1);
    }
  }

  return factors;
}

const aliquotSum = (sumOfFactors, number) => {
  if (sumOfFactors === number && number !== 1) {
    return `perfect`;
  }
  if (sumOfFactors > number) {
    return 'abundant';
  }
  if (sumOfFactors <= number) {
    return `deficient`;
  }
}

export const classify = number => {
  if (number <= 0) {
    throw `Classification is only possible for natural numbers.`;
  }

  const factors = generateFactors(number);

  const sumOfFactors = factors.reduce((total, number) => total + number);  

  return aliquotSum(sumOfFactors, number);
};
