export const transpose = (input) => {
  const matrix = new TransposeMatrix(input);

  return matrix.doTranspose();
}

class TransposeMatrix {
  constructor(list) {
    this.list = list;
  }

  padRows(list) {
    let longestLine;
    return list.map((col, index) => {
      longestLine = this.getLongestLine(list.slice(index, list.length));
      return col.length < longestLine ? col.padEnd(longestLine, ' ') : col;
    })
  }

  getLongestLine(list) {
    return list.reduce((longestLine, currentLine) => {
      return currentLine.length > longestLine ? currentLine.length : longestLine;
    }, 0);
  }

  doTranspose() {
    const matrix = this.padRows(this.list);
    let transposed = [];

    let column, letter;
    for (const row of matrix) {
      for (column = 0; column < row.length; column++) {
        letter = `${row[column]}`;
        if (transposed[column]) {
          transposed[column] += letter;
        } else {
          transposed[column] = letter;
        }
      }
    }

    return transposed;
  }
}