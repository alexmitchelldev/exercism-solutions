const CROSS = 'X';
const NOUGHT = 'O';
const MAX_PLAYS = 9;

const countPlays = (board) => {
  let crossCount = 0;
  let noughtCount = 0;
  board.forEach((row) => {
    row.split('').forEach((space) => {
      if (space === CROSS) {
        crossCount++;
      }
      if (space === NOUGHT) {
        noughtCount++;
      }
    })
  });

  return {
    cross: crossCount,
    nought: noughtCount
  }
}

const countHoriztonalWins = (board, player) => {
  let numWins = 0;

  board.forEach((row) => {
    if (row.split('').every((play) => { return play === player})) {
      numWins++;
    }
  });

  return numWins;
}

const countVerticalWins = (board, player) => {
  let numWins = 0;

  for (let col = 0; col < 3; col++) {
    if (board[0][col] === player && board[1][col] === player && board[2][col] === player) {
      numWins++;
    }
  }

  return numWins;
}

const countDiagonalWins = (board, player) => {
  let numWins = 0;

  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    numWins++;
  }

  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    numWins++;
  }

  return numWins;
}

const countWins = (board, player) => {
  let wins = 0;

  wins += countHoriztonalWins(board, player);
  wins += countVerticalWins(board, player);
  wins += countDiagonalWins(board, player);

  return wins;
}

export const gamestate = (board) => {
  const numPlays = countPlays(board);

  if (numPlays.nought > numPlays.cross) {
    throw new Error('Wrong turn order: O started');
  }

  if (numPlays.cross > numPlays.nought + 1) {
    throw new Error('Wrong turn order: X went twice');
  }

  const numCrossWins = countWins(board, CROSS);
  const numNoughtWins = countWins(board, NOUGHT);

  if (numCrossWins > 0 && numNoughtWins > 0) {
    throw new Error('Impossible board: game should have ended after the game was won');
  }

  if (numCrossWins === 0 && numNoughtWins === 0) {
    return numPlays.cross + numPlays.nought === MAX_PLAYS ? 'draw' : 'ongoing';
  }

  if (numCrossWins > 0 || numNoughtWins > 0) {
    return 'win';
  }
};