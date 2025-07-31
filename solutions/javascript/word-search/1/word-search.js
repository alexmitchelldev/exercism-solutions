const DIRECTIONS = {
  up: {
    row: -1,
    column: 0
  },
  up_right: {
    row: -1,
    column: 1
  },
  right: {
    row: 0,
    column: 1
  },
  down_right: {
    row: 1,
    column: 1
  },
  down: {
    row: 1,
    column: 0
  },
  down_left: {
    row: 1,
    column: -1
  },
  left: {
    row: 0,
    column: -1
  },
  up_left: {
    row: -1,
    column: -1
  }
}

class WordSearch {
  constructor(grid) {
    this.grid = grid;
    this.rows = grid.length;
    this.columns = grid[0].length;
    this.found = {};
  }
  
  loadWords (words) {
    words.forEach(word => {
      this.found[word] = undefined;
    })
  }

  getPossibleDirections (word, letterPosition) {
    const secondLetter = word[1];
    let possibleDirections = [];

    for (const direction in DIRECTIONS) {
      if (this.directionHasSufficientSpace(word, direction, letterPosition)) {
        if (this.grid[letterPosition.row + DIRECTIONS[direction].row][letterPosition.column + DIRECTIONS[direction].column] === secondLetter) {
          possibleDirections.push(direction);
        }
      }
    }

    return possibleDirections;
  }

  checkDirection (word, direction, firstLetterPosition) {
    let row = firstLetterPosition.row;
    let column = firstLetterPosition.column;
    let wordFound = {
      result: true,
      finalLetterPosition: []
    }
    let currentLetter;

    for (let i = 0; i < word.length; i++) {
      currentLetter = word[i];

      if (this.grid[row][column] === currentLetter) {
        row += DIRECTIONS[direction].row;
        column += DIRECTIONS[direction].column;
      } else {
        wordFound.result = false;
        return wordFound;
      }
    }

    if (wordFound.result) {
      switch (true) {
        case /down_right/.test(direction):
          wordFound.finalLetterPosition.push(row, column);
          break;
        case /up_left/.test(direction):
          wordFound.finalLetterPosition.push(row + 2, column + 2);
          break;
        case /up_right/.test(direction):
          wordFound.finalLetterPosition.push(row + 2, column);
          break;
        case /down_left/.test(direction):
          wordFound.finalLetterPosition.push(row, column + 2);
          break;
        case /^down/.test(direction):
          wordFound.finalLetterPosition.push(row, column + 1);
          break;
        case /^up/.test(direction):
          wordFound.finalLetterPosition.push(row + 2, column + 1);
          break;
        case /right/.test(direction):
          wordFound.finalLetterPosition.push(row + 1, column);
        break;
        case /left/.test(direction):
          wordFound.finalLetterPosition.push(row + 1, column + 2);
          break;
      }
      
    }

    return wordFound;
  }

  directionHasSufficientSpace (word, direction, firstLetterPosition) {
    const remainingWordLength = word.length - 1;
    let hasSufficientSpace = false;

    switch (true) {
      case /^down/.test(`${direction}`):
        hasSufficientSpace = firstLetterPosition.row + remainingWordLength <= this.rows;
        break;
      case /^up/.test(`${direction}`): 
        hasSufficientSpace = firstLetterPosition.row - remainingWordLength >= 0;
        break;
      case /right/.test(direction):
        hasSufficientSpace = firstLetterPosition.column + remainingWordLength <= this.columns;
        break;
      case /left/.test(direction):
        hasSufficientSpace = firstLetterPosition.column - remainingWordLength >= 0;
        break;
    }

    return hasSufficientSpace;
  }

  find(words) {
    this.loadWords(words);

    words.forEach(word => {
      const firstLetter = word[0];
      let firstLetterPosition = {
        row: null,
        column: null
      };

      for (let currentRow = 0; currentRow < this.rows; currentRow++) {
        for (let currentColumn = 0; currentColumn < this.columns; currentColumn++) {
          const currentLetter = this.grid[currentRow][currentColumn];
          if (currentLetter === firstLetter) {
            firstLetterPosition.row = currentRow;
            firstLetterPosition.column = currentColumn;
            const possibleDirections = this.getPossibleDirections(word, firstLetterPosition);

            if (possibleDirections.length > 0) {
              for (const direction of possibleDirections) {
                const checkDirection = this.checkDirection(word, direction, firstLetterPosition);

                if (checkDirection.result) {
                  this.found[word] = {
                    start: null,
                    end: null
                  }
                  this.found[word].start = [firstLetterPosition.row + 1, firstLetterPosition.column + 1];
                  this.found[word].end = checkDirection.finalLetterPosition;
                }
              }
            }
          }
        }
      }
    })

    return this.found;
  }
}

export default WordSearch;