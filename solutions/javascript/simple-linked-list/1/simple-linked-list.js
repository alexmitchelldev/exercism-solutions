export class Element {
  constructor(value, next) {
    this._value = (value === undefined ? null : value);
    this._next = (next === undefined ? null : next);
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  set next(value) {
    this._next = value;
  }
}

export class List {
  constructor(head) {
    this._head = (head === undefined ? null : head);
    this._length = 0;
    this._reverseArray = false;
    this.initWithArray(head);
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  set head(nextElement) {
    this._head = nextElement;
  }

  add(nextElement) {
    if (this.length === 0) {
      this.head = nextElement;
    } else {
      let headElement = this.head;
      nextElement.next = headElement;
      this._head = nextElement;      
    }
    this._length++;
  }

  initWithArray(head) {
    if (Array.isArray(head)) {
      for (const element of head) {
        this.add(new Element(element));
      }
    }
  }

  toArray() {
    let array = [];

    let currentElement = this.head;

    while (currentElement.next) {
      array.push(currentElement.value);
      currentElement = currentElement.next;
    }
    array.push(currentElement.value);

    return (this._reverseArray === true ? array.reverse() : array);
  }

  reverse() {
    this._reverseArray = (this._reverseArray === true ? false : true);
    return this;
  }
}