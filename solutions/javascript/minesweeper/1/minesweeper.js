export const annotate = (minefield) => {
  const BOARD_NUM_ROWS = minefield.length - 1;
  const MINE = '*';
  const completedBoard = [];
  
  let completedRow = '';
  let mineCount = 0;
  let hasRowAbove = null;
  let hasRowBelow = null;
  let hasRightSpace = null;
  let hasLeftSpace = null;

  minefield.forEach((row, rowIndex) => {
    completedRow = '';
    row.split('').forEach((space, spaceIndex) => {
      mineCount = 0;
      if (space === MINE) {
        completedRow += MINE;
      } else {
        hasRowAbove = rowIndex > 0;
        hasRowBelow = rowIndex < BOARD_NUM_ROWS;
        hasRightSpace = spaceIndex < row.length - 1;
        hasLeftSpace = spaceIndex > 0;

        // check up
        if (hasRowAbove) {
          if (minefield[rowIndex - 1][spaceIndex] === MINE) {
            mineCount++;
          }
          // check diagonal up right
          if (hasRightSpace) {
            if (minefield[rowIndex - 1][spaceIndex + 1] === MINE) {
              mineCount++;
            }
          }
        }
        // check right
        if (hasRightSpace) {
          if (minefield[rowIndex][spaceIndex + 1] === MINE) {
            mineCount++;
          }
          // check diagonal down right
          if (hasRowBelow) {
            if (minefield[rowIndex + 1][spaceIndex + 1] === MINE) {
              mineCount++;
            }
          }
        }
        // check down
        if (hasRowBelow) {
          if (minefield[rowIndex + 1][spaceIndex] === MINE) {
            mineCount++;
          }
          // check diagonal left down
          if (hasLeftSpace) {
            if (minefield[rowIndex + 1][spaceIndex - 1] === MINE) {
              mineCount++;
            }
          }
        }
        // check left
        if (hasLeftSpace) {
          if (minefield[rowIndex][spaceIndex - 1] === MINE) {
            mineCount++;
          }
          // check diagonal left up
          if (hasRowAbove) {
            if (minefield[rowIndex - 1][spaceIndex - 1] === MINE) {
              mineCount++;
            }
          }
        }
        completedRow += mineCount > 0 ? mineCount.toString() : ' ';
      }
    })
    completedBoard.push(completedRow);
  });

  return completedBoard;
};
