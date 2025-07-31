export class Triangle {
  constructor(side1, side2, side3) {
    this.#sides  = [side1, side2, side3];
  }

  //Checks Triangle Inequality Theorem + all sides length greater than 0
  #hasValidSides () {
    const [side1, side2, side3] = this.#sides;
    let triangleInequalityTheorem = () => {
      return !(side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1);
    }

    let greaterThanZero = sideLength => sideLength > 0;

    return (this.#sides.every(greaterThanZero) && triangleInequalityTheorem(this.#sides));
  }

  #matchingSides () {
    const [side1, side2, side3] = this.#sides;
    if (side1 === side2 && side2 === side3) {
      return 3;
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      return 2;
    } else {
      return 0;
    }
  }

  #isEquilateral() {
    return (this.#hasValidSides() && this.#matchingSides() === 3);
  }
  #isIsosceles() {
    return (this.#hasValidSides() && this.#matchingSides() >= 2);
  }
  #isScalene() {
    return (this.#hasValidSides() && this.#matchingSides() === 0);
  }
}
