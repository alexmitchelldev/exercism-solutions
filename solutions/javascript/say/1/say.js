const ScaleWordMap = new Map([
  [0, 'hundred'],
  [1, 'thousand'],
  [2, 'million'],
  [3, 'billion']
])

const NumWordsMap = new Map([
  [0, 'zero'],
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
  [10, 'ten']
])

const TeensMap = new Map([
  [2, 'twent'],
  [3, 'thirt'],
  [4, 'fourt'],
  [5, 'fift'],
  [6, 'sixt'],
  [7, 'sevent'],
  [8, 'eight'],
  [9, 'ninet']
])

function getTwoDigitNumString (n) {
  const numString = n.toString();
  let resultString = ''
  if (n > 0 && n < 10) {
    resultString = NumWordsMap.get(n);
  } else if (n > 10 && n < 13) {
    resultString = n === 11 ? 'eleven' : 'twelve';
  }
  else if (n >= 13 && n < 20) {
    resultString += getTeenString(numString);
  } else {
    resultString += getTyString(numString);
    // remove 'u' from 'fourty'
    if (n >= 40 && n < 50) {
      resultString = resultString.replace(/u/, '');
    }
  }
  return resultString;
}

function getTeenString (numString) {
  return `${TeensMap.get(parseInt(numString[1], 10))}een`;
}

function getTyString (numString) {
  return `${TeensMap.get(parseInt(numString[0], 10))}y${numString[1] !== '0' ? `-${NumWordsMap.get(parseInt(numString[1], 10))}` : ''}`;
}

function chunkNumber (n) {
  let chunks = [];
  const numString = n.toString();

  for (let i = numString.length - 1; i >= 0; i -= 3) {
    chunks.push(numString.slice(Math.max(i - 2, 0), i + 1));
  }

  return chunks;
}

export const say = (n) => {
  if (n < 0 || n >= 1000000000000) {
    throw new Error('Number must be between 0 and 999,999,999,999.');
  }
  const chunks = chunkNumber(n);
  let chunk = null;
  let nums = [];
  let twoDigits = null;
  let num1, num2, num3;

  for (let i = chunks.length - 1; i >= 0; i--) {
    chunk = chunks[i];
    [num1, num2, num3] = chunk;
    if (chunk !== '000') {
      switch (chunk.length) {
        case 1:
          nums.push(NumWordsMap.get(parseInt(num1)));
        break;
        case 2:
          twoDigits = getTwoDigitNumString(chunk);
          nums.push(twoDigits);
        break;
        case 3:
          if (num1 === '0') {
            if (num2 === '0') {
              nums.push(NumWordsMap.get(parseInt(num3, 10)));
            } else {
              twoDigits = getTwoDigitNumString(`${num2}${num3}`);
              nums.push(twoDigits);
            }
            break;
          }
          nums.push(NumWordsMap.get(parseInt(num1)));
          nums.push(ScaleWordMap.get(0));
          if (`${num2}${num3}` !== '00') {
            twoDigits = getTwoDigitNumString(`${num2}${num3}`);
            nums.push(twoDigits);
          }
        break;
      }

      if (chunks.length > 1 && i !== 0) {
        nums.push(ScaleWordMap.get(i));
      }
    }
  }

  return nums.join(' ');
};