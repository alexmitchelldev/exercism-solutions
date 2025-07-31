const OPERATORS = ['+', '-', '*', '/'];
const STACK_MANIUPLATION = ['dup', 'drop', 'swap', 'over'];

export class Forth {
  constructor() {
    this._stack = [];
    this._customWords = {

    }
  }

  flatten = (array, flattened = []) => {
    for (const element of array) {
      if (Array.isArray(element)) {
        this.flatten(element, flattened);
      } else if (element !== null && element !== undefined) {
        flattened.push(element);
      }
    }

    return flattened;
  };

  isCustom(input) {
    return input[0] === ':' && input[input.length - 1] === ';';
  }

  addCustomWord(input) {
    input.shift();
    input.pop();
    if (/[0-9]/.test(input[0])) {
      throw new Error('Invalid definition');
    }
    const word = input.shift();
    const commands = input;

    if (this._customWords[commands[0]]) {
      commands[0] = this._customWords[commands[0]];
      this._customWords[word] = commands;
    } else {
      this._customWords[word] = commands;
    }
  }

  evaluate(input) {
    input = input.toLowerCase();
    input = input.split(' ');

    if (this.isCustom(input)) {
      this.addCustomWord(input);
      return;
    }
    const customWords = Object.keys(this._customWords);
    input = input.map((element) => {
      return customWords.indexOf(element) > -1 ? this._customWords[element] : element;
    })
    input = this.flatten(input);

    const numbers = input.filter((element) => { return /[0-9]/.test(element) });
    const operators = input.filter((element) => { return OPERATORS.indexOf(element) > - 1 });
    const manipulations = input.filter((element) => { return STACK_MANIUPLATION.indexOf(element) > -1 });

    if (numbers.length === 0 && manipulations.length === 0 && operators.length === 0) {
      throw new Error('Unknown command');
    }

    if ((numbers.length <= 1 && manipulations.length === 0) || numbers.length === 0 || numbers.length === 1 && (manipulations[0] === 'swap' || manipulations[0] === 'over')) {
      throw new Error('Stack empty');
    }

    let stack = [];

    for (const element of input) {
      if (!isNaN(parseInt(element))) {
        stack.push(parseInt(element));
      }
      if (OPERATORS.indexOf(element) > -1) {
        switch (element) {
          case '+':
            stack = [stack.reduce((acc, curr) => { return acc + curr })];
            break;
          case '-':
            stack = [stack.reduce((acc, curr) => { return acc - curr })];
            break;
          case '*':
            stack = [stack.reduce((acc, curr) => { return acc * curr })];
            break;
          case '/':
            if (stack.filter((el) => { return el === 0 }).length > 0) {
              throw new Error('Division by zero');
            }
            stack = [Math.floor(stack.reduce((acc, curr) => { return acc / curr }))];
            break;

        }
      }
      if (STACK_MANIUPLATION.indexOf(element) > -1) {
        let swapped;
        switch (element) {
          case 'dup':
            stack.push(stack[stack.length - 1]);
            break;
          case 'drop':
            stack.splice(stack.length - 1, 1);
            break;
          case 'swap':
            swapped = stack[stack.length - 2];
            stack[stack.length - 2] = stack[stack.length - 1];
            stack[stack.length - 1] = swapped;
            break;
          case 'over':
            stack.push(stack[stack.length - 2]);
            break;
        }
      }
      if (customWords.indexOf(element) > -1) {
        let remainder = input.splice(input.indexOf(element) + 1);
        input = input.concat(this._customs[element]);
        input = input.concat(remainder);
      }
    }

    this._stack = stack;
  }

  get stack() {
    return this._stack;
  }
}