export const square = (squareNumber, returnTotalGrains) => {
  if (squareNumber < 1 || squareNumber > 64) {
    throw 'square must be between 1 and 64';
  }

  const grains = {
    square: BigInt(1),
    total: BigInt(1)
  }

  for (let i = 0; i < (squareNumber - 1); i++) {
    grains.square += grains.square;
    grains.total  += grains.square;
  }

  return returnTotalGrains ? grains.total : grains.square;
};

export const total = () => {
  const returnTotalGrains = true;
  return square(64, returnTotalGrains);
};
