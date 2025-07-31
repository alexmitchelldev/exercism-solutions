export const classify = number => {

  if (number <= 0) {
    throw `Classification is only possible for natural numbers.`;
  }

  const generateFactors = () => {
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
  
  const factors = generateFactors(number);

  const sumOfFactors = factors.reduce((total, number) => total + number);

  const aliquotSum = () => {
    if (sumOfFactors === number && number !== 1) {
      return `perfect`;
    } else if (sumOfFactors > number) {
      return 'abundant';
    } else if (sumOfFactors <= number) {
      return `deficient`;
    }
  }

  return aliquotSum();
};
