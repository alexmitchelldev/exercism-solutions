//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list = []) {
    this.values = list;
  }

  append(list) {
    let appendedList = this.values;
    
    for (const value of list.values) {
      appendedList.push(value);
    }

    return new List(appendedList);
  }

  concat(lists) {
    let concatenatedList = this.values;

    for (const list of lists.values) {
      for (const value of list.values) {
        concatenatedList.push(value);
      }
    }

    return new List(concatenatedList);
  }

  filter(callback) {
    let filteredList = [];

    for (const value of this.values) {
      if (callback(value)) {
        filteredList.push(value);
      }
    }

    return new List(filteredList);
  }

  map(callback) {
    let mappedList = [];

    for (const value of this.values) {
      mappedList.push(callback(value));
    }

    return new List(mappedList);
  }

  length() {
    let count = 0;

    for (const value of this.values) {
      count++;
    }

    return count;
  }

  foldl(callback, initialValue) {
    let foldedValue = initialValue;

    for (const value of this.values) {
      foldedValue = callback(foldedValue, value);
    }

    return foldedValue;
  }

  foldr(callback, initialValue) {
    let foldedValue = initialValue;
    let reversedList = this.reverse();

    for (const value of reversedList.values) {
      foldedValue = callback(foldedValue, value);
    }

    return foldedValue;
  }

  reverse() {
    let reversedList = [];
    let i = this.length() - 1;

    for (i; i >= 0; i--) {
      reversedList.push(this.values[i]);
    }

    return new List(reversedList);
  }
}