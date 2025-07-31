const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const REVERSED = ALPHABET.split('').reverse().join('');
const MODES = {
  ENCODE: 1,
  DECODE: 2
}

export const encode = (input) => {
  let encoded = '';
  for (const char of input) {
    encoded += encodeChar(char, MODES.ENCODE);
  }
  encoded = groupByLength5(encoded);
  return encoded;
};

export const decode = (input) => {
  let decoded = '';
  for (const char of input) {
    decoded += encodeChar(char, MODES.DECODE);
  }
  return decoded;
};

function groupByLength5 (encodedString) {
  let groupsOf5 = [];
  let groupOf5 = null;

  for (let i = 0; i < encodedString.length; i+= 5) {
    groupOf5 = encodedString.slice(i, i + 5);
    groupsOf5.push(groupOf5);
  }

  return groupsOf5.join(' ');
}

export function encodeChar(char, mode) {
  char = char.toLowerCase();
  if (/[0-9]/.test(char)) {
    return char;
  } else if (!/[a-z]/.test(char)) {
    return '';
  }

  const i = mode === MODES.ENCODE ? ALPHABET.indexOf(char) : REVERSED.indexOf(char);
  return mode === MODES.ENCODE ? REVERSED[i] : ALPHABET[i];
}