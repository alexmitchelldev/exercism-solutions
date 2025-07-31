const FACTOR_SOUNDS = [
  [3, 'Pling'],
  [5, 'Plang'],
  [7, 'Plong']
];

export const convert = input => {
  let result = '';

  FACTOR_SOUNDS.forEach((sound) => {
    if (input % sound[0] === 0) {
      result += sound[1];
    }
  });

  return result.length > 0 ? result : input.toString();
};