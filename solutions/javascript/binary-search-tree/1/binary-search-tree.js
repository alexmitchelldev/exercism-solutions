export class BinarySearchTree {
  constructor(value) {
    this.head = this.createNode(value);
  }

  createNode (value) {
    return {
      left: null,
      data: value,
      right: null
    }
  }

  get data() {
    return this.head.data;
  }
  get right() {
    return this.head.right;
  }

  get left() {
    return this.head.left;
  }

  insert(value, currentNode) {
    if (!currentNode) {
      currentNode = this.head;
    }

    while (currentNode.left && currentNode.right) {
      currentNode = value <= currentNode.data ? currentNode.left : currentNode.right;
    }

    if (currentNode.left) {
      if (value <= currentNode.left.data || value <= currentNode.data) {
        this.insert(value, currentNode.left);
      } else {
        currentNode.right = this.createNode(value);
      }
    } else if (currentNode.right) {
      if (value > currentNode.right.data || value > currentNode.data) {
        this.insert(value, currentNode.right);
      } else {
        currentNode.left = this.createNode(value);
      }
    } else {
      if (value <= currentNode.data) {
        currentNode.left = this.createNode(value);
      } else {
        currentNode.right = this.createNode(value);
      }
    }
  }

  each(addToSortedArray, currentNode) {
    if (!currentNode) {
      currentNode = this.head;
    }

    let isSorted = false;

    if (!currentNode.left && !currentNode.right) {
      addToSortedArray(currentNode.data);
      isSorted = true;
    }

    if (currentNode.left) {
      this.each(addToSortedArray, currentNode.left);
    }

    if (currentNode.right) {
      addToSortedArray(currentNode.data);
      this.each(addToSortedArray, currentNode.right);
    } else if (!isSorted) {
      addToSortedArray(currentNode.data);
    }
  }
}