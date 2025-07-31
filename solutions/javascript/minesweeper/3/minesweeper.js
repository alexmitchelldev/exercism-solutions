export const annotate = (minefield) => {
  const BOARD_NUM_ROWS = minefield.length - 1;
  const MINE = '*';
  const EMPTY_SPACE = ' ';

  const isValidPosition = (r, c) => {
    return r >= 0 && r <= BOARD_NUM_ROWS && c >= 0 && c < minefield[0].length;
  }

  const countAdjacentMines = (r, c) => {
    let adjacentMines = 0;

    for (let i = r - 1; i <= r + 1; i++) {
      for (let j = c - 1; j <= c + 1; j++) {
        if (isValidPosition(i, j) && !(i === r && j === c) && minefield[i][j] === MINE) {
          adjacentMines++;
        }
      }
    }

    return adjacentMines;
  }

  const annotateRow = (row, rowIndex) => {
    return row.split('').map((colVal, colIndex) => {
      const numAdjacentMines = countAdjacentMines(rowIndex, colIndex);
      return colVal === MINE ?
      MINE : numAdjacentMines > 0 ?
      numAdjacentMines.toString() : EMPTY_SPACE;
    }).join('');
  }

  return minefield.map(annotateRow);
};