export const abilityModifier = score => {
  if (score < 3) {
    throw (`Ability scores must be at least 3`);
  }
  if (score > 18) {
    throw (`Ability scores can be at most 18`);
  }
  return Math.floor((score - 10) / 2);
};

export class Character {
  static rollAbility() {
    const rollSingleDice  = () => Math.floor(Math.random() * 6 + 1);
    const rollAllDice     = () => {
      let rolls = [];
      for (let i = 0; i < 4; i++) {
        rolls.push(rollSingleDice());
      }
      return rolls;
    }

    const diceRolls   = rollAllDice();
    const lowestRoll  = diceRolls.reduce((a, b) => Math.min(a, b));

    //Remove lowest dice roll score
    diceRolls.splice(diceRolls.indexOf(lowestRoll), 1);
    
    const total = diceRolls.reduce((total, roll) => {
      return total + roll;
    }, 0);
    return total;
  }

  constructor () {
    this._strength      = Character.rollAbility();
    this._dexterity     = Character.rollAbility();
    this._constitution  = Character.rollAbility();
    this._intelligence  = Character.rollAbility();
    this._wisdom        = Character.rollAbility();
    this._charisma      = Character.rollAbility();
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution; 
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}
