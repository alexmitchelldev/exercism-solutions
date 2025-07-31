export class Triangle {
  constructor(side1, side2, side3) {
    this.side1  = side1;
    this.side2  = side2;
    this.side3  = side3;
    this.sides  = [this.side1, this.side2, this.side3];
  }
  get isEquilateral() {
    let greaterThanZero = sideLength => sideLength > 0;
    if (!this.sides.every(greaterThanZero)) {
      return false;
    } else if (this.side1 + this.side2 < this.side3 || this.side1 + this.side3 < this.side2 || this.side2 + this.side3 < this.side1) {
      return false;
    } else if (this.side1 === this.side2 && this.side2 === this.side3) {
      return true;
    } else {
      return false;
    }
  }
  get isIsosceles() {
    let greaterThanZero = sideLength => sideLength > 0;
    if (!this.sides.every(greaterThanZero)) {
      return false;
    } else if (this.side1 + this.side2 < this.side3 || this.side1 + this.side3 < this.side2 || this.side2 + this.side3 < this.side1) {
      return false;
    } else if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
      return true;
    } else {
      return false;
    }
  }
  get isScalene() {
    let greaterThanZero = sideLength => sideLength > 0;
    if (!this.sides.every(greaterThanZero)) {
      return false;
    } else if (this.side1 + this.side2 < this.side3 || this.side1 + this.side3 < this.side2 || this.side2 + this.side3 < this.side1) {
      return false;
    } else if (this.side1 !== this.side2 && this.side2 !== this.side3) {
      return true;
    } else {
      return false;
    }
  }
}
