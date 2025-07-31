export const compute = (strand1, strand2) => {
  let hammingDistance = 0;
  if (strand1.length < 1 && strand2.length > 0) {
    throw `left strand must not be empty`;
  } else if (strand2.length < 1 && strand1.length > 0) {
    throw `right strand must not be empty`;
  } else if (strand1.length !== strand2.length) {
    throw `left and right strands must be of equal length`;
  }
  for (let i = 0; i < strand1.length; i++) {
    if (strand1[i] !== strand2[i]) {
      hammingDistance++;
    }
  }
  return hammingDistance;
};
