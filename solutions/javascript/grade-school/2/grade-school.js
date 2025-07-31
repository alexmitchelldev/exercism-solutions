//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor () {
    this._roster = {};
  }

  roster () {
    let rosterCopy = {};

    for (const grade in this._roster) {
      rosterCopy[grade] = this._roster[grade].map(studentName => studentName);
    }

    return rosterCopy;
  }

  add (name, grade) {
    this.removeStudent(name);

    if (this._roster[grade]) {
      this._roster[grade].push(name);
    } else {
      this._roster[grade] = [name];
    }

    this._roster[grade].sort();
  }

  grade (grade) {
    let gradeCopy = [];

    if (this._roster[grade]) {
      gradeCopy = this._roster[grade].map(studentName => studentName);
    }

    return gradeCopy;
  }

  removeStudent (name) {
    for (const grade in this._roster) {
      if (this._roster[grade].indexOf(name) > -1) {
        this._roster[grade] = this._roster[grade].filter(studentName => studentName !== name);
      }
    }
  }
}
