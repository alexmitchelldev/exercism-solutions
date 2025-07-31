export class GameOfLife {
  constructor(matrix) {
    this.matrix = matrix;
  }

  tick() {
    const rows = this.matrix.length;
    const columns = this.matrix.length > 0 ? this.matrix[0].length : 0;

    let cell = null;
    let neighbors = [];
    let numNeighbors = 0;
    let newMatrix = [];
    let newRow = [];

    for (let row = 0; row < rows; row++) {
      newRow = [];
      for (let column = 0; column < columns; column++) {
        neighbors = [];
        cell = this.matrix[row][column];

        if (row > 0) {
          neighbors.push(this.matrix[row - 1][column]);
        }
        if (row < rows - 1) {
          neighbors.push(this.matrix[row + 1][column]);
        }

        if (column > 0) {
          neighbors.push(this.matrix[row][column - 1]);
          if (row > 0) {
            neighbors.push(this.matrix[row - 1][column - 1]);
          }
          if (row < rows - 1) {
            neighbors.push(this.matrix[row + 1][column - 1]);
          }
        }

        if (column < columns - 1) {
          neighbors.push(this.matrix[row][column + 1]);
          if (row > 0) {
            neighbors.push(this.matrix[row - 1][column + 1]);
          }
          if (row < rows - 1) {
            neighbors.push(this.matrix[row + 1][column + 1]);
          }
        }

        numNeighbors = neighbors.filter((n) => {
          return n === 1;
        }).length;

        if (cell === 1 && ![2, 3].includes(numNeighbors)) {
          newRow.push(0);
        } else if (cell === 0 && numNeighbors === 3) {
          newRow.push(1);
        } else {
          newRow.push(cell);
        }
      }
      newMatrix.push(newRow);
    }
    this.matrix = newMatrix;
  }

  state() {
    return this.matrix;
  }
}
