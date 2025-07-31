export class DiffieHellman {
  constructor(p, g) {
    this.p = p;
    this.g = g;
    if (this.p === 1 || this.g === 1) {
      throw `1 is not a prime number`;
    }
    if (this.p < 1 || this.p > 9998 || this.g < 1 || this.g > 9998) {
      throw `argument out of range`;
    }
    for (let i = 2; i < this.p; i++) {
      if (this.p % i === 0) {
        throw `${this.p} is not a prime number`;
      }
    }
    for (let i = 2; i < g; i++) {
      if (this.g % i === 0) {
        throw `${this.g} is not a prime number`;
      }
    }
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1) {
      throw `${privateKey} is not greater than 1`;
    }
    if (privateKey === this.p) {
      throw `${privateKey} cannot be the same value as ${this.p}`;
    }
    if (privateKey >= this.p) {
      throw `${privateKey} is not less than ${this.p}`;
    }

    const publicKey = this.g ** privateKey % this.p;
    return publicKey;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    const secretKey = theirPublicKey ** myPrivateKey % this.p; 
    return secretKey;
  }
}
