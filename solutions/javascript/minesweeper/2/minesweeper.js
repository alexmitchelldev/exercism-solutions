export const annotate = (minefield) => {
  const BOARD_NUM_ROWS = minefield.length - 1;
  const MINE = '*';
  const EMPTY_SPACE = ' ';
  const completedBoard = [];
  
  let completedRow = '';
  let mineCount = 0;
  

  minefield.forEach((row, rowIndex) => {
    completedRow = '';
    row.split('').forEach((_, colIndex) => {
      mineCount = 0;
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

      mineCount += countAdjacentMines(rowIndex, colIndex);
      completedRow += minefield[rowIndex][colIndex] === MINE ? MINE : mineCount > 0 ? mineCount.toString() : EMPTY_SPACE;
    })
    completedBoard.push(completedRow);
  });

  return completedBoard;
};