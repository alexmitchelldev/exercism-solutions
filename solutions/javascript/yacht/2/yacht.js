//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Yacht {
  constructor (diceRolls) {
    this.diceRolls = diceRolls.sort();
  }

  sum = rolls => {
    return rolls.reduce((dieScore, total) => {
      return dieScore + total;
    })
  }

  numbers (number) {
    const hasNumber = this.diceRolls.indexOf(number) > -1;

    const count = hasNumber ? this.diceRolls.lastIndexOf(number) - this.diceRolls.indexOf(number) + 1 : 0;

    return count * number;
  }

  yacht () {
    const firstDie = this.diceRolls[0];

    return this.diceRolls.every((die) => { return die === firstDie}) ? 50 : 0;
  }

  ones () {
    return this.numbers(1);
  }

  twos () {
  return this.numbers(2);
  }

  threes () {
    return this.numbers(3);
  }

  fours () {
    return this.numbers(4);
  }

  fives () {
    return this.numbers(5);
  }

  sixes () {
    return this.numbers(6);
  }

  full_house () {
    let fullHouseConditions = [];

    fullHouseConditions.push(this.diceRolls.lastIndexOf(this.diceRolls[0]) === 2 && this.diceRolls.lastIndexOf(this.diceRolls[3]) === 4);
    fullHouseConditions.push(this.diceRolls.lastIndexOf(this.diceRolls[0]) === 1 && this.diceRolls.lastIndexOf(this.diceRolls[2]) === 4);

    const isFullHouse = fullHouseConditions.some((condition) => condition === true );

    return isFullHouse ? this.sum(this.diceRolls) : 0;
  }
  
  four_of_a_kind () {
    const isFourOfAkind = this.diceRolls.lastIndexOf(this.diceRolls[0]) >= 3 || this.diceRolls.lastIndexOf(this.diceRolls[1]) === 4;

    if (isFourOfAkind) {
      if (this.diceRolls[0] !== this.diceRolls[1]) {
        return this.sum(this.diceRolls.slice(1, 5));
      } else {
        return this.sum(this.diceRolls.slice(0, 4));
      }
    } else {
      return 0;
    }
  }

  little_straight () {
    const firstDieRoll = 1;

    return this.diceRolls.every((dieRoll, index) => dieRoll === index + firstDieRoll) ? 30 : 0;
  }

  big_straight () {
    const firstDieRoll = 2;

    return this.diceRolls.every((dieRoll, index) => dieRoll === index + firstDieRoll) ? 30 : 0;
  }

  choice () {
    return this.sum(this.diceRolls);
  }
}

export const score = (diceRolls, category) => {
  const methodName = category.split(' ').join('_');
  const game = new Yacht(diceRolls);

  return game[methodName]();
};
