export const rotate = (string, key) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let rotCipher = '';
  let rotIndex;

  function isLetter (char) {
    return /[a-z]/.test(char.toLowerCase());
  }

  for (const char of string)
  {
    if (isLetter(char))
    {
      rotIndex = alphabet.indexOf(char.toLowerCase()) + key > 25 ? alphabet.indexOf(char.toLowerCase()) + key - 26 : alphabet.indexOf(char.toLowerCase()) + key;
      char === char.toLowerCase() ? rotCipher += alphabet[rotIndex] : rotCipher += alphabet[rotIndex].toUpperCase();
    }
    else
    {
      rotCipher += char;
    }
  }

  return rotCipher;
};
