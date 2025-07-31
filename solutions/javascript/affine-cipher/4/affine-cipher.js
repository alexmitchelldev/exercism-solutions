const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const m = ALPHABET.length;

export const encode = (phrase, key) => {
  return new AffineChipher().encode(phrase, key);
};

export const decode = (phrase, key) => {
  return new AffineChipher().decode(phrase, key);
};

class AffineChipher {
  constructor () {
  }

  encode (phrase, key) {
    if (!this.areCoprimes(key.a, m)) {
      throw new Error('a and m must be coprime.');
    }

    let encoded = '';

    for (const char of phrase) {
      encoded += this.getEncodedChar(char, key.a, key.b);
    }

    encoded = this.groupByLength5(encoded);

    return encoded;
  }

  decode = (phrase, key) => {
    if (!this.areCoprimes(key.a, m)) {
      throw new Error('a and m must be coprime.');
    }
    let decoded = '';
    for (const char of phrase) {
      decoded += this.getDecodedChar(char, key.a, key.b);
    }
  
    return decoded;
  };

  areCoprimes(a, b) {
    const largestNumber = Math.max(a, b);

    for (let i = 2; i <= largestNumber / 2; i++) {
      if (a % i === 0 && b % i === 0) {
        return false;
      }
    }

    return true;
  }

  getEncodedChar(char, a, b) {
    if (/[0-9]/.test(char)) {
      return char;
    } else if (char === ' ') {
      return '';
    }
  
    const i = ALPHABET.indexOf(char.toLowerCase());
    return i > -1 ? ALPHABET[((a * i) + b) % m] : '';
  }

  getDecodedChar (char, a, b) {
    if (/[0-9]/.test(char)) {
      return char;
    } else if (char === ' ') {
      return '';
    }
  
    const y = ALPHABET.indexOf(char.toLowerCase());
    const mmi = this.getMMI(a, m);
    const decodedIndex = (mmi * (y - b) % m);
    return ALPHABET[decodedIndex >= 0 ? decodedIndex : m + decodedIndex];
  }

  // https://en.wikipedia.org/wiki/Modular_multiplicative_inverse
  // https://www.youtube.com/watch?v=shaQZg8bqUM
  // https://www.omnicalculator.com/math/multiplicative-inverse-modulo
  getMMI (a, b) {
    let q, r
    let s = [1, 0];
    let i = 0;

    while (a % b !== 0) {
      r = a % b;
      q = (a - r) / b;
      s[i] = s[i] - (q * s[i === 0 ? 1 : 0]);
      a = b;
      b = r;
      i = i === 0 ? 1 : 0;
    }
    
    return s[i === 0 ? 1 : 0];
  }

  groupByLength5 (encodedString) {
    let groupsOf5 = [];
    let groupOf5 = null;
  
    for (let i = 0; i < encodedString.length; i+= 5) {
      groupOf5 = encodedString.slice(i, i + 5);
      groupsOf5.push(groupOf5);
    }
  
    return groupsOf5.join(' ');
  }
}