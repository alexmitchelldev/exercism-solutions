const bracketMap = new Map([
  ['[', ']'],
  ['(', ')'],
  ['{', '}']
]
);

const rightBrackets = new Set([']', ')', '}']);

/**
 * @param {string} bracketsString
 * 
 * @returns {boolean} isPaired
 */

export const isPaired = (bracketsString) => {
  let isPaired = true;

  let stack = [];

  for (let i = 0; i < bracketsString.length; i++) {
    let currentChar = bracketsString[i];

    if (rightBrackets.has(currentChar)) {
      if (bracketMap.get(stack.pop()) !== currentChar) {
        isPaired = false;
        return isPaired;
      }
    } else if (bracketMap.has(currentChar)) {
      stack.push(currentChar);
    }
  }

  isPaired = stack.length === 0;

  return isPaired;
}