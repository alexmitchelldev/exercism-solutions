export const transform = oldData => {
  let newData = {};
  for (const score in oldData) {
    for (const letter of oldData[score]) {
      newData[letter.toLowerCase()] = Number(score);
    }
  }
  return newData;
};
