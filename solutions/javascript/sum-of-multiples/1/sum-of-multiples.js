//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (magicalItems, levelNumber) => {
  const Multiples = new Set();

  for (const item of magicalItems) {
    if (item === 0) {
      continue;
    }

    let multiplier = 1;
    let magicalValue = item * multiplier;

    while (magicalValue < levelNumber) {
      Multiples.add(magicalValue);

      multiplier++;
      magicalValue = item * multiplier;
    }
  }

  return Array.from(Multiples).reduce((currentValue, totalValue) => { return currentValue + totalValue}, 0);
};
