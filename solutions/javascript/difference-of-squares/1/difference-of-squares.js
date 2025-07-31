export class Squares {
  constructor(number) {
    this._number = number;
  }

  get sumOfSquares() {
    let total = 0;
    for (let i = 1; i <= this._number; i++) {
      total += Math.pow(i, 2);
    }
    return total;
  }

  get squareOfSum() {
    let sum = 0;
    for (let i = 1; i <= this._number; i++) {
      sum += i;
    }
    return sum * sum;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
