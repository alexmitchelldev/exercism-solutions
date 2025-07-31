//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  let result = '';
  for (var i = string.length -1; i >= 0; i--) {
    result += string[i];
  }
  return result;
};
