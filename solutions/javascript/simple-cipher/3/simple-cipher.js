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
    let decodedIndex, i;
    let keyIndex = 0;

    for (i = 0; i < text.length; i++) {
      if (keyIndex > key.length - 1) {
        keyIndex = 0;
      }

      if (method === 'encode') {
        decodedIndex = (ALPHABET.indexOf(key[keyIndex]) + ALPHABET.indexOf(text[i])) % 26;
      } else {
        decodedIndex = (ALPHABET.indexOf(key[keyIndex]) - ALPHABET.indexOf(text[i]));
        decodedIndex = decodedIndex <= 0 ? Math.abs(decodedIndex) % 26 : decodedIndex = 26 - decodedIndex
      }

      decoded += ALPHABET[decodedIndex];
      keyIndex++;
    }

    return decoded;
  }

  get key() {
    return this._key;
  }
}