const VALID_DIRECTIONS = ['north', 'east', 'south', 'west'];

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  constructor() {
    this._bearing = 'north';
    this.x = null;
    this.y = null;
  }

  get bearing() {
    return this._bearing;
  }

  set bearing(value) {
    this._bearing = value;
  }

  get coordinates() {
    return [this.x, this.y];
  }

  place({ x, y, direction }) {
    if (VALID_DIRECTIONS.indexOf(direction) === -1) {
      throw new InvalidInputError();
    }

    this.x = x;
    this.y = y;
    this._bearing = direction;
  }

  evaluate(instructions) {
    let directionIndex;
    let newDirectionIndex;

    for (const movement of instructions) {
      directionIndex = VALID_DIRECTIONS.indexOf(this.bearing);
      switch (movement) {
        case ('R'):
          newDirectionIndex = (directionIndex + 1 < VALID_DIRECTIONS.length) ? directionIndex + 1 : 0;
  
          this.bearing = VALID_DIRECTIONS[newDirectionIndex];
          break;
        case ('L'):
          newDirectionIndex = (directionIndex - 1 >= 0) ? directionIndex - 1 : VALID_DIRECTIONS.length - 1; 
  
          this.bearing = VALID_DIRECTIONS[newDirectionIndex];
          break;
        case ('A'):
          switch (this.bearing) {
            case ('north'):
              this.y += 1;
              break;
            case ('east'):
              this.x += 1;
              break;
            case ('south'):
              this.y -= 1;
              break;
            case ('west'):
              this.x -= 1;
              break;
          }
          break;
      }
    }
  }
}