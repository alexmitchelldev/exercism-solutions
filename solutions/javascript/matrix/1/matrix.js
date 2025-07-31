export class Matrix {
  constructor(string) {
    this.matrix = this.generateMatrix(string);
  }

  generateMatrix (string) {
    let matrix = [];
    let row = [];
    let number = '';
    for (const char of string) {
      if (char !== ' ' && char !== '\n') {
        number += char;
      }

      if (char === ' ') {
        row.push(Number(number));
        number = '';
      }

      if (char === '\n') {
        row.push(Number(number));
        matrix.push(row);
        row = [];
        number = '';
      }
    }
    row.push(Number(number));
    matrix.push(row);
    return matrix;
  }

  get rows() {
    return this.matrix;
  }
  
  get columns() {
    let columns = [];
    let column = [];
    for (let i = 0; i < this.matrix[0].length; i++) {
      for (let j = 0; j < this.matrix.length; j++) {
        column.push(this.matrix[j][i]);
      }
      columns.push(column);
      column = [];
    }
    return columns;
  }
}