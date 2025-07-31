const FACTOR_SOUNDS = [
  {
    factor: 3,
    rainSound: 'Pling'
  },
  {
    factor: 5,
    rainSound: 'Plang'
  },
  {
    factor: 7,
    rainSound: 'Plong'
  },
]

export const convert = input => {
  const inputHasFactor = factor => { 
    return input % factor === 0; 
  };
  
  const reducer = (accumulator, currentFactorSound) => {
    if (inputHasFactor(currentFactorSound.factor)) {
      return accumulator + currentFactorSound.rainSound;
    } else {
      return accumulator;
    }
  }
  const initialResult = "";
  const result = FACTOR_SOUNDS.reduce(reducer, initialResult);
  return result.length > 0 ? result : input.toString();
};
