const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export class Cipher {
  constructor(key = 'aaaaaaaaaa') {
    this._key = key;
  }

  encode(text) {
    return this.doCryptography(text, 'encode');
  }

  decode(text) {
    return this.doCryptography(text, 'decode');
  }

  doCryptography(text, method) {
    const key = this.key;
    let decoded = '';
    let decodedIndex;
    let keyIndex = 0;

    for (const char of text) {
      if (keyIndex > key.length - 1) {
        keyIndex = 0;
      }

      if (method === 'encode') {
        decodedIndex = (ALPHABET.indexOf(key[keyIndex]) + ALPHABET.indexOf(char)) % 26;
      } else {
        decodedIndex = (ALPHABET.indexOf(key[keyIndex]) - ALPHABET.indexOf(char));
        decodedIndex = decodedIndex <= 0 ? Math.abs(decodedIndex) % 26 : decodedIndex = 26 - decodedIndex
      }

      decoded += ALPHABET.charAt(decodedIndex);
      keyIndex++;
    }

    return decoded;
  }

  get key() {
    return this._key;
  }
}