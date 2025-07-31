export const encode = (string) => {
  let encodedString = "";
  let count = 1;

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    let nextChar = string[i + 1];

    if (currentChar === nextChar) {
      count++;
    } else {
      if (count > 1) {
        encodedString += count.toString();
      }
      encodedString += currentChar;
      count = 1;
    }
  }

  return encodedString;
};

export const decode = (string) => {
  const isNumeric = /[0-9]/;
  let numberOfChars = "";
  let decodedString = "";

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];

    if (isNumeric.test(currentChar)) {
      numberOfChars += currentChar;
    } else {
      if (numberOfChars === "") {
        decodedString += currentChar;
      } else {
        for (let j = 0; j < Number(numberOfChars); j++) {
          decodedString += currentChar;
        }
      }

      numberOfChars = "";
    }
  }

  return decodedString;
};
