export class HighScores {
  constructor(scores) {
    this._scores = scores;
  }

  topScores(scores) {
    let topScores = [];
    
    if (scores.length >= 3) {
      for (let i = 0; i < 3; i++) {
        topScores.push(scores[i]);
      }
    } else {
      for (let i = 0; i < scores.length; i++) {
        topScores.push(scores[i]);
      }
    }
    return topScores;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._scores[this._scores.length - 1];
  }

  get personalBest() {
    return this._scores.reduce((highest, number) => {
      return number > highest ? number : highest;
    });
  }

  get personalTopThree() {
    let sortedScores = this._scores.sort((a, b) => a - b).reverse();
    return this.topScores(sortedScores);
  }
}
