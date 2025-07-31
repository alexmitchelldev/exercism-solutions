//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key = 'aaaaaaaaaa') {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    this._key = key;
  }

  encode(text) {
    const key = this.key;
    let encoded = '';
    let encodedIndex, i;
    let keyIndex = 0;

    for (i = 0; i < text.length; i++) {
      if (keyIndex > key.length - 1) {
        keyIndex = 0;
      }

      encodedIndex = (this.alphabet.indexOf(key[keyIndex]) + this.alphabet.indexOf(text[i])) % 26;
      encoded += this.alphabet[encodedIndex];
      keyIndex++;
    }

    return encoded;
  }

  decode(text) {
    const key = this.key;
    let decoded = '';
    let decodedIndex, i;
    let keyIndex = 0;

    for (i = 0; i < text.length; i++) {
      if (keyIndex > key.length - 1) {
        keyIndex = 0;
      }

      decodedIndex = (this.alphabet.indexOf(key[keyIndex]) - this.alphabet.indexOf(text[i]));

      if (decodedIndex <= 0) {
        decodedIndex = Math.abs(decodedIndex) % 26;
      } else {
        decodedIndex = 26 - decodedIndex;
      }

      decoded += this.alphabet[decodedIndex];
      keyIndex++;
    }

    return decoded;
  }

  get key() {
    return this._key;
  }
}