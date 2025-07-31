export class Palindromes {
  constructor(factors) {
    (this.minFactor = factors.minFactor),
      (this.maxFactor = factors.maxFactor),
      (this.palindromes = this.getPalindromes()),
      (this.palindromeObjectKeys = Object.keys(this.palindromes)),
      (this.numPalindromes = this.palindromeObjectKeys.length),
      (this.smallest =
        this.numPalindromes > 0
          ? this.palindromes[this.palindromeObjectKeys[0]]
          : { value: null, factors: [] }),
      (this.largest =
        this.numPalindromes > 0
          ? this.palindromes[this.palindromeObjectKeys[this.numPalindromes - 1]]
          : { value: null, factors: [] });
  }

  static generate(factors) {
    if (factors.minFactor > factors.maxFactor) {
      throw "min must be <= max";
    }

    return new Palindromes(factors);
  }

  validatePalindrome(number) {
    let isPalindrome = true;
    number = number.toString();

    for (let i = 0; i < number.length; i++) {
      if (number[i] !== number[number.length - i - 1]) {
        isPalindrome = false;
      }
    }

    return isPalindrome;
  }

  getPalindromes() {
    const { minFactor, maxFactor, validatePalindrome } = this;

    let palindromes = {};
    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        const value = i * j;

        if (validatePalindrome(value)) {
          if (palindromes[value]) {
            palindromes[value].factors.push([i, j]);
          } else {
            palindromes[value] = { value: value, factors: [[i, j]] };
          }
        }
      }
    }
    return palindromes;
  }
}
