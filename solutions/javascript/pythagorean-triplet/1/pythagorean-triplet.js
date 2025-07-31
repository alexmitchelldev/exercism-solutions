export function triplets({ minFactor, maxFactor, sum }) {
  let validTriplets = [];
  let i = minFactor ? minFactor : 1;
  maxFactor = maxFactor ? maxFactor : sum;

  for (i; i < maxFactor; i++) {
    for (let j = i + 1; j < maxFactor; j++) {
      for (let k = j + 1; k < maxFactor; k++) {
        let triplet = new Triplet(i, j, k);

        if (triplet.sum() === sum) {
          if (triplet.isPythagoreanTriplet(sum)) {
            validTriplets.push(triplet);
            break;
          }
        }
      }
    }
  }

  return validTriplets;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }

  sum () {
    return this.a + this.b + this.c;
  }

  isPythagoreanTriplet () {
    let pythagoreanTripletConditions = [];

    pythagoreanTripletConditions.push(Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2)) === this.c);
    pythagoreanTripletConditions.push(this.a < this.b);
    pythagoreanTripletConditions.push(this.b < this.c);

    return pythagoreanTripletConditions.every((condition) => condition === true);
  }
}