const DIRECTIONS = {
  right: 1,
  down: 2,
  left: 3,
  up: 4
}

const changeDirection = currentDirection => {
  return currentDirection === DIRECTIONS.up ? 1 : currentDirection + 1;
}

const initMatrix = (size) => {
  let matrix = [];

  for (let i = 0; i < size; i++) {
    matrix.push(new Array(size).fill(null));
  }

  return matrix;
}

export const spiralMatrix = (size) => {
  const totalSquares = Math.pow(size, 2);
  let direction = DIRECTIONS.right;
  let row = 0;
  let column = 0;
  let matrix = initMatrix(size);
  let hasReachedEdge = false;

  for (let i = 0; i < totalSquares; i++) {
    hasReachedEdge = (row === size ) || (matrix[row][column] !== null);
    
    if (hasReachedEdge) {
      switch (direction) {
        case DIRECTIONS.right:
          column -= 1;
          row += 1;
          break;
        case DIRECTIONS.down:
          row -= 1;
          column -= 1;
          break;
        case DIRECTIONS.left:
          column += 1;
          row -= 1;
          break;
        case DIRECTIONS.up:
          row += 1;
          column += 1;
          break;
      }
    }

    matrix[row][column] = i + 1;
    direction = hasReachedEdge ? changeDirection(direction) : direction;

    switch (direction) {
      case DIRECTIONS.right:
        column += 1;
        break;
      case DIRECTIONS.down:
        row += 1;
        break;
      case DIRECTIONS.left:
        column -= 1;
        break;
      case DIRECTIONS.up:
        row -= 1;
        break;
    }
  }

  return matrix;
};