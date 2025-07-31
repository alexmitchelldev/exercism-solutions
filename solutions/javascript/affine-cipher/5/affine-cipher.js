const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const m = ALPHABET.length;

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
    return this.extendedGCD(a, b).gcd === 1;
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
  getMMI (a, mod) {
    const extendedGCD = this.extendedGCD(a, mod);

    // https://en.wikipedia.org/wiki/Coprime_integers
    // two integers are coprime if the only positive integer that is a divisor of them both is 1, or their gcd is 1
    if (extendedGCD.gcd !== 1) {
      throw new Error('Modular Multiplicative Inverse does not exist for the given parameters.');
    }

    return (extendedGCD.mmi_a_mod % mod + mod) % mod; // ensure positive MMI
  }

  // https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm
  extendedGCD (a, mod) {
    let [old_r, r] = [a, mod];
    let [old_s, s] = [1, 0];
    let [old_t, t] = [0, 1];
    let quotient;
  
    while (r !== 0) {
      quotient = Math.floor(old_r / r);
      [old_r, r] = [r, old_r - (quotient * r)];
      [old_s, s] = [s, old_s - (quotient * s)];
      [old_t, t] = [t, old_t - (quotient * t)];
    }

    return {
      gcd: old_r,
      mmi_a_mod: old_s,
      mmi_mod_a: old_t
    }
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

export const encode = (phrase, key) => {
  return new AffineChipher().encode(phrase, key);
};

export const decode = (phrase, key) => {
  return new AffineChipher().decode(phrase, key);
};