//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 export const primes = (number) => {
  const Primes = new Map();

  for (let i = 2; i <= number; i++) {
    let multiplier = 2;
    if (Primes.has(i)) {
      continue;
    } else {
      Primes.set(i, true);

      while (i * multiplier <= number) {
        Primes.set(i * multiplier, false);
        multiplier++;
      }
    }
  }

  return Array.from(Primes.keys()).filter((num) => { return Primes.get(num) === true });
};