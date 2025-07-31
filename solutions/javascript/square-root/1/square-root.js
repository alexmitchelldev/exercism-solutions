//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (x) => {
  for (let i = 0; i <= x; i++) {
    if (x / i === i) {
        return i;
    }
  }

};
