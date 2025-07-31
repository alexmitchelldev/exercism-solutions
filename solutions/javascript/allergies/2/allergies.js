export class Allergies {
  constructor(score) {
    this._allergies = {
      1: 'eggs',
      2: 'peanuts',
      4: 'shellfish',
      8: 'strawberries',
      16: 'tomatoes',
      32: 'chocolate',
      64: 'pollen',
      128: 'cats'
    }
    this._values = Object.values(this._allergies);
    this._scores = Object.keys(this._allergies).reverse().map((number) => { return parseInt(number)});
    this._score = score;
  }

  list(total = 0, scores = this._scores, allergies = []) {
    while(this._score > 256) {
      this._score -= 128;
    }
    
    for (const score of scores) {
      if (total + score <= this._score) {
        total += score;
        allergies.push(this._allergies[score]);
        this.list(total, scores.splice(scores.indexOf(score) + 1), allergies);
      }
    }

    return allergies.sort((a, b) => { return this._values.indexOf(a) - this._values.indexOf(b)});
  }

  allergicTo(allergy) {
    const allergies = this.list();    

    return allergies.indexOf(allergy) > -1;
  }
}