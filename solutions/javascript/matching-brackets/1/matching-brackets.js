const matchingBrackets = {
  "[" : "]",
  "(" : ")",
  "{" : "}"
}

export const isPaired = bracketsString => {
  bracketsString = removeNonBrackets(bracketsString);

  return compareBrackets(bracketsString);
};

const compareBrackets = bracketsString => {
  let leftBrackets  = [];
  const rightBrackets = ')}]';

  for (let i = 0; i < bracketsString.length; i++) {
    if (!rightBrackets.includes(bracketsString[i])) {
      leftBrackets.push(bracketsString[i]);
    } else {
      if (matchingBrackets[leftBrackets.pop()] !== bracketsString[i]) {
        return false;
      }
    }
  };

  return leftBrackets.length === 0 ? true : false;
};

const removeNonBrackets = bracketsString => {
  const brackets  = '[{()}]';

  let onlyBracketsString = '';

  for (const char of bracketsString) {
    if (brackets.includes(char)) {
      onlyBracketsString += char;
    }
  }

  return onlyBracketsString;
}
