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

  //Requirements for an equilateral triangle

  equilateral (sides) {
    if (sides[0] === sides[1] && sides[1] === sides[2]) {
      return true;
    }
  }

  //Requirements for an isoceles triangle

  isosceles (sides) {
    if (sides[0] === sides[1] || sides[0] === sides[2] || sides[1] === sides[2]) {
      return true;
    }
  }

  //Requirements for a scalene triangle

  scalene (sides) {
    if (sides[0] !== sides[1] && sides[1] !== sides[2]) {
      return true;
    }
  }

  get isEquilateral() {
    if(this.hasValidSides(this.sides) && this.equilateral(this.sides)) {
      return true;
    } else {
      return false;
    }
  }
  get isIsosceles() {
    if(this.hasValidSides(this.sides) && this.isosceles(this.sides)) {
      return true;
    } else {
      return false;
    }
  }
  get isScalene() {
    if(this.hasValidSides(this.sides) && this.scalene(this.sides)) {
      return true;
    } else {
      return false;
    }
  }
}
