const row       = 0,
      column    = 1,
      defaults  = {
        white: [7, 3],
        black: [0, 3]
      };


export class QueenAttack {
    constructor(queens){
      this._queens = {...defaults, ...queens};
      this._isValid = this.isValid(this._queens.white, this._queens.black);
      QueenAttack.prototype.toString = function queensToString() {
        let board = [
          '_ _ _ _ _ _ _ _',
          '_ _ _ _ _ _ _ _',
          '_ _ _ _ _ _ _ _',
          '_ _ _ _ _ _ _ _',
          '_ _ _ _ _ _ _ _',
          '_ _ _ _ _ _ _ _',
          '_ _ _ _ _ _ _ _',
          '_ _ _ _ _ _ _ _',
        ];

        let whiteQueenRow = this.generateQueenRow(this._queens.white, 'W');
        let blackQueenRow = this.generateQueenRow(this._queens.black, 'B');

        board[this._queens.white[row]] = whiteQueenRow;
        board[this._queens.black[row]] = blackQueenRow;
        
        return board.join('\n');
      }
    }

    get white() {
      return this._queens.white;
    }

    get black() {
      return this._queens.black;
    }

    validBoardPosition(queen) {
      if (!(queen[row] >= 0 && queen[row] < 8 && queen[column] >= 0 && queen[column] < 8)) {
        throw new Error ('Queen must be placed on the board');
      }
    }

    sameRow() {
      if(this._queens.white[row] === this._queens.black[row]) {
        return true;
      }
    }

    sameColumn() {
      if(this._queens.white[column] === this._queens.black[column]) {
        return true;
      }
    }

    sameSpace() {
      if (this.sameRow() && this.sameColumn()) {
        throw new Error('Queens cannot share the same space');
      }
    }

    isValid() {
      //throws error if either queen position is out of the board's boundaries or if the queens share the same square
      this.validBoardPosition(this._queens.white);
      this.validBoardPosition(this._queens.black);
      this.sameSpace();
    }

    generateQueenRow(queen, colour) {
      //returns the row with the queens position indicated by the letter (W || B) as a string
      let queenRow = '';

      for (let i = 0; i < 8; i++) {
        if (i === queen[column] && i !== 7) {
          queenRow += `${colour} `;
        } else if (i !== 7) {
          queenRow += '_ ';
        } else {
          if (i === queen[column]) {
            queenRow += `${colour}`
          } else {
            queenRow += '_';
          }
        }
      }

      return queenRow;
    }

    get canAttack() {
      
      //determines if queens can attack on horitzontal or vertical axis      
      if (this.sameRow() || this.sameColumn()) {
        return true;
      }

      //determines if queens can attack on diagonal axis
      if (Math.abs(this._queens.white[row] - this._queens.black[row]) === Math.abs(this._queens.black[column] - this._queens.white[column])) {
        return true;
      }

      return false;
    }

}

