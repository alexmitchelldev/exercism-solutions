export class LinkedList {
  constructor () {
    this.head = this.createNode();
  }

  /**
   * Returns a linked list node with data and next keys
   * 
   * Accepts two optional parameters data and next
   *
   * @param {number} [data]
   * @param {object} [next]
   * @returns {object}
   */
  createNode (data, next) {
    return {
      data: data ? data : null,
      next: next ? next : null
    }
  }

  push(value) {
    if (!this.head.data) {
      this.head = this.createNode(value);
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = this.createNode(value);
    }
  }


  pop() {
    let value;
    if (!this.head.next) {
      value = this.head.data;
      this.head =  this.createNode();
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
      this.head = this.createNode();
    } else {
      value = this.head.data;
      this.head = this.head.next;
    }

    return value;
  }

  unshift(value) {
    this.head = this.createNode(value, this.head);
  }

  delete(value) {
    if (this.head.data === value) {
      if (!this.head.next) {
        this.head = this.createNode();
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

