class BaseConverter {
  toBase (num, base) {
    let i = 1;
    
    while (Math.pow(base, i) < num) {
      i++;
    }

    let remainder = num;
    let nums = [];
    let j;

    for (i; i > 0; i--) {
      j = 0;
      while (Math.pow(base, i - 1) <= remainder) {
        remainder -= Math.pow(base, i - 1);
        j++;
      }
      nums.push(parseInt(j.toString(), 10));
    }
    
    return nums;
  }

  fromBase (numString, base) {
    const numbers = this.numStringToArray(numString);
    let result = 0;

    numbers.forEach((num, i) => {
      result += num * Math.pow(base, i);
    });

    return result;
  }

  numArrayToString (numbers) {
    return numbers.reverse().join('_');
  }

  numStringToArray (numString) {
    return numString.split('_').map((n) => { return parseInt(n, 10)});
  }
}

class WrongBase extends Error {
  constructor(base) {
    super(`Wrong ${base < 2 ? 'input' : 'output'} base`)
  }
}

class WrongInputFormat extends Error {
  constructor () {
    super('Input has wrong format');
  }
}

export const convert = (numbers, originalBase, newBase) => {
  if (originalBase < 2 || newBase < 2) {
    throw new WrongBase(originalBase);
  } 
  if (numbers.length === 0 | (numbers[0] === 0 && numbers.length > 1) || numbers.some((n) => { return n < 0 || n > originalBase - 1 })) {
    throw new WrongInputFormat();
  }
  
  const converter = new BaseConverter();
  const numString = converter.numArrayToString(numbers);
  const num = converter.fromBase(numString, originalBase);

  return converter.toBase(num, newBase);
};