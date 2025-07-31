export const transpose = (input) => {
  const matrix = new TransposeMatrix(input);

  return matrix.transposed;
}

class TransposeMatrix {
  constructor(list) {
    this.transposed = this.doTranspose(list);
  }

  padRows(list) {
    let longestLine;
    return list.map((col, index) => {
      longestLine = this.getLongestLine(list.slice(index, list.length));
      return col.length < longestLine ? col.padEnd(longestLine, ' ') : col;
    })
  }

  getLongestLine(list) {
    let longestLine = 0;

    for (const line of list) {
      if (line.length > longestLine) {
        longestLine = line.length;
      }
    }

    return longestLine;
  }

  doTranspose(list) {
    const matrix = this.padRows(list);
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