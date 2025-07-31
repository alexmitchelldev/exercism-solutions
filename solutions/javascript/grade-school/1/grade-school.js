//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor () {
    this._roster = {};
  }

  roster () {
    return this._roster;
  }

  add (name, grade) {
    if (this._roster[grade]) {
      this._roster[grade].push(name);
    } else {
      this._roster[grade] = [name];
    }

    this.sortRoster();
  }

  grade (grade) {
    return this._roster[grade] ? this._roster[grade] : [];
  }

  sortRoster () {
    for (const grade in this._roster) {
      this._roster[grade].sort();
    }
  }
}
