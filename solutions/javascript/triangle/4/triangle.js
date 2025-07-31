export class Triangle {
  constructor(side1, side2, side3) {
    this.sides  = [side1, side2, side3];
  }

  //Checks Triangle Inequality Theorem + all sides length greater than 0
  hasValidSides () {
    let triangleInequalityTheorem = sides => {
      return !(sides[0] + sides[1] < sides[2] || sides[0] + sides[2] < sides[1] || sides[1] + sides[2] < sides[0]);
    }

    let greaterThanZero = sideLength => sideLength > 0;

    return (this.sides.every(greaterThanZero) && triangleInequalityTheorem(this.sides));
  }

  matchingSides (sides) {
    if (sides[0] === sides[1] && sides[1] === sides[2]) {
      return 3;
    } else if (sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2]) {
      return 2;
    } else {
      return 0;
    }
  }

  get isEquilateral() {
    return (this.hasValidSides(this.sides) && this.matchingSides(this.sides) === 3);
  }
  get isIsosceles() {
    return (this.hasValidSides(this.sides) && this.matchingSides(this.sides) >= 2);
  }
  get isScalene() {
    return (this.hasValidSides(this.sides) && this.matchingSides(this.sides) === 0);
  }
}
