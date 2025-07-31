export function triplets({ minFactor, maxFactor, sum }) {
  let validTriplets = [];
  let i = minFactor ? minFactor : 1;
  maxFactor = maxFactor ? maxFactor : sum;

  for (i; i < maxFactor; i++) {
    for (let j = i + 1; j < maxFactor; j++) {
      for (let k = j + 1; k < maxFactor; k++) {
        let triplet = new Triplet(i, j, k);

        if (triplet.sum() === sum && triplet.isPythagoreanTriplet(sum)) {
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
    const {a, b, c} = this;
    return [a, b ,c];
  }

  sum () {
    const {a, b, c} = this;
    return a + b + c;
  }

  isPythagoreanTriplet () {
    const {a , b, c} = this;
    let pythagoreanTripletConditions = [];

    pythagoreanTripletConditions.push(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)) === c);
    pythagoreanTripletConditions.push(a < b);
    pythagoreanTripletConditions.push(b < c);

    return pythagoreanTripletConditions.every((condition) => condition === true);
  }
}


