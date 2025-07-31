//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor () {
    this.head = {
      data: null,
      next: null
    }
  }

  push(value) {
    const newNode = {
      data: value,
      next: null
    }

    if (!this.head.data) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  }


  pop() {
    let value;
    if (!this.head.next) {
      value = this.head.data;
      this.head = {
        data: null,
        next: null
      }
    } else {
      let currentNode = this.head;

      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }

      value = currentNode.next.data;
      currentNode.next = null;
    }

    return value;
  }

  shift() {
    let value;

    if (!this.head.next) {
      value = this.head.data;
      this.head = {
        data: null,
        next: null
      }
    } else {
      value = this.head.data;
      const newHead = this.head.next;
      this.head = newHead;
    }

    return value;
  }

  unshift(value) {
    const newHead = {
      data: value,
      next: this.head
    }

    this.head = newHead;
  }

  delete(value) {
    if (this.head.data === value) {
      if (!this.head.next) {
        this.head = {
          data: null,
          next: null
        }
      } else {
        this.head = this.head.next;
      }
      
    } else {
      let currentNode = this.head;

      if (currentNode.next) {
        while (currentNode.next.data !== value) {
          currentNode = currentNode.next;
        }
  
        if (currentNode.next.data === value) {
          currentNode.next = currentNode.next.next;
        }
      }
    }
  }

  count() {
    if (!this.head.data) {
      return 0;
    }

    let count = 1;
    
    let currentNode = this.head;
    
    while (currentNode.next) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }
}