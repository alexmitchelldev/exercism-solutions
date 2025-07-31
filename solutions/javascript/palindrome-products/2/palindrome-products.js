export class Palindromes {
  constructor (factors) {
    this.minFactor = factors.minFactor,
    this.maxFactor = factors.maxFactor,
    this.palindromes = this.getPalindromes(),
    this.palindromeObjectKeys = Object.keys(this.palindromes),
    this.numPalindromes = this.palindromeObjectKeys.length,
    this.smallest = this.numPalindromes > 0 ? this.palindromes[this.palindromeObjectKeys[0]] : { value: null, factors: [] },
    this.largest = this.numPalindromes > 0 ? this.palindromes[this.palindromeObjectKeys[this.numPalindromes -1]] : { value: null, factors: [] }
  }
  
  static generate(factors) {
    if (factors.minFactor > factors.maxFactor) {
      throw ('min must be <= max');
    }
    
    return new Palindromes(factors);
  }

  validatePalindrome (n) {
    const number = n.toString();
    const numberReversed = n.toString().split('').reverse().join('');

    const isPalindrome = number === numberReversed;

    return isPalindrome;
  }

  areMirroredFactors (factors1, factors2) {
    const areMirroredFactors = factors1.reverse().toString() === factors2.toString();
    return areMirroredFactors;
  }

  getPalindromes () {
    const { minFactor, maxFactor, validatePalindrome, areMirroredFactors } = this;
    
    let palindromes = {};

    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = minFactor; j <= maxFactor; j++) {
          const value = i * j;
          
        if (validatePalindrome(value)) {
            if (palindromes[value]) {
              let areUniqueFactors = true;

              for (let k = 0; k < palindromes[value].factors.length; k++) {
                if (areMirroredFactors([i, j], palindromes[value].factors[k])) {
                  areUniqueFactors = false;
                }
              }

              if (areUniqueFactors) {
                palindromes[value].factors.push([i, j]);
              }
                
            } else {
                palindromes[value] = { value: value, factors: [[i, j]]};
            }
        }
      }
    }

    return palindromes;
  }
}
