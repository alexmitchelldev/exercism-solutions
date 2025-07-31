const integerToHandshake = {
  1: 'wink',
  2: 'double blink',
  4: 'close your eyes',
  8: 'jump'
}

const createHandshakeArray = number => {
  let counter = 0;
  let result  = new Array;
  const keys = Object.keys(integerToHandshake).reverse();

  for (const key of keys) {
    if (counter < number) {
      if (key <= number) {
        counter += Number(key);
        result.push(integerToHandshake[key]);
      }
    }
  }

  return result.reverse();

};

export const commands = number => {
  let reverse = false;

  if (number === 16) {
    return new Array;
  }

  if (number > 16) {
    number  -= 16;
    reverse = true;
  }

  let secretHandshakeArray = createHandshakeArray(number);

  if (reverse) {
    secretHandshakeArray.reverse();
  }
  
  return secretHandshakeArray;
};