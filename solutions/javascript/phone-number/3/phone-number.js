const checkValidCode = (number) => {
  return !(number === '0' || number === '1');
}

const validate = number => {
  let areaIndex     = 0;
  let exchangeIndex = 3;

  if (number.length === 11) {
    areaIndex++;
    exchangeIndex++;
  }

  if (number.length < 10) {
    throw 'Incorrect number of digits';
  }
  if (number.length > 11) {
    throw 'More than 11 digits';
  }

  if (number.length === 11 && number[0] !== '1') {
    throw '11 digits must start with 1';
  }

  if (!checkValidCode(number[areaIndex])) {
    const areaDigit = number[areaIndex] === '0' ? 'zero' : 'one';
    throw `Area code cannot start with ${areaDigit}`;
  }

  if (!checkValidCode(number[exchangeIndex])) {
    const exchangeDigit = number[exchangeIndex] === '0' ? 'zero' : 'one';
    throw `Exchange code cannot start with ${exchangeDigit}`;
  }

  return true;
}

export const clean = number => {
  let result = '';
  const punctuations = ['@', ':', '!'];
  
  // adds all numbers to result
  for (const char of number) {
    if (punctuations.includes(char)) {
      throw 'Punctuations not permitted';
    }
    for (let unicode = 97; unicode < 123; unicode++) {
      if (String.fromCharCode(unicode) === char) {
        throw 'Letters not permitted';
      }
    }
    for (let unicode = 48; unicode < 58; unicode++) {
      if (String.fromCharCode(unicode) === char) {
        result += char;
      }
    }
  }
  
  if (!validate(result)) {
    return validate(result);
  }
  if (result.length === 11) {
    result = result.substring(1);
  }
  
  return result;
};
