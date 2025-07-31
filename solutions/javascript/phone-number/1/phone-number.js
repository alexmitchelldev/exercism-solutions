const checkValidCode = number => {
  return number === '0' || number === '1' ? false : true;
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
  
  
  if (result.length < 10) {
    throw 'Incorrect number of digits';
  } else if (result.length > 11) {
    throw 'More than 11 digits';
  } else if (result.length === 11) {
    if (result[0] !== '1') {
      throw '11 digits must start with 1';
    } else if (result[0] === '1') {
      result = result.substring(1);
    }
  }

  if(!checkValidCode(result[0])) {
    const areaDigit = result[0] === '0' ? 'zero' : 'one';
    throw `Area code cannot start with ${areaDigit}`;
  } else if (!checkValidCode(result[3])) {
    const exchangeDigit = result[3] === '0' ? 'zero' : 'one';
    throw `Exchange code cannot start with ${exchangeDigit}`;
  }
  
  return result;
};
