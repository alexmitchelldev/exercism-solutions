export class Triangle {
  constructor(side1, side2, side3) {
    this.sides  = [side1, side2, side3];
  }

  //Checks triangle's sides are all greater than 0 and that the sum of any 2 is greater than the third
  hasValidSides () {
    let sumAnyTwoSidesGreaterThanThird = sides => {
      if (sides[0] + sides[1] < sides[2] || sides[0] + sides[2] < sides[1] || sides[1] + sides[2] < sides[0]) {
        return false;
      } else {
        return true;
      }
    }

    let greaterThanZero = sideLength => sideLength > 0;

    if (this.sides.every(greaterThanZero) && sumAnyTwoSidesGreaterThanThird(this.sides)) {
      return true;
    }
  }

  matchingSides (sides) {
    let matchedSides = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (sides[i] === sides[j] && i !== j && matchedSides < 3) {
          matchedSides++;
        }
      }
    }
    return matchedSides;
  }

  get isEquilateral() {
    return Boolean(this.hasValidSides(this.sides) && this.matchingSides(this.sides) === 3);
  }
  get isIsosceles() {
    return Boolean(this.hasValidSides(this.sides) && this.matchingSides(this.sides) >= 2);
  }
  get isScalene() {
    return Boolean(this.hasValidSides(this.sides) && this.matchingSides(this.sides) === 0);
  }
}
