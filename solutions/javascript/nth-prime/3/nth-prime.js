//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const prime = (n) => {
  if (n === 0) {
    throw Error('there is no zeroth prime');
  }

  let primes = [];
  let i = 2;

  while (primes.length !== n) {
    if (i > 2 && i % 2 === 0) {
      i++;
      continue;
    }
    if (isPrime(i)) primes.push(i);
    i++;
  }

  return primes[primes.length - 1];
};

const isPrime = (number) => {
  let i;
  let isPrime = true;

  if (number === 1) {
    isPrime = false;
    return isPrime;
  }

  for (i = 2; i < (number / 2) + 1; i++) {
    if (number % i === 0) isPrime = false;
  }

  return isPrime;
};