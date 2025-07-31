//
// This is only a SKELETON file for the 'Kindergarten Garden' exercise.
// It's been provided as a convenience to get you started writing code faster.
//

const DEFAULT_STUDENTS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    this.rows = diagram.split('\n');
    this.students = students.sort();
  }

  plants(student) {
    const row1 = this.rows[0];
    const row2 = this.rows[1];
    const studentPlant1 = this.students.indexOf(student) * 2;
    const studentPlant2 = studentPlant1 + 1;

    let studentsPlants = [];

    studentsPlants.push((PLANT_CODES[row1[studentPlant1]]));
    studentsPlants.push((PLANT_CODES[row1[studentPlant2]]));
    studentsPlants.push((PLANT_CODES[row2[studentPlant1]]));
    studentsPlants.push((PLANT_CODES[row2[studentPlant2]]));

    return studentsPlants;
  }
}
