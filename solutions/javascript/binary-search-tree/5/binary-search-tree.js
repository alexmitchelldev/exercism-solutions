export class BinarySearchTree {
  constructor(value) {
    this.rootNode = this.createNode(value);
  }

  createNode (value) {
    return {
      left: null,
      data: value,
      right: null
    }
  }

  get data() {
    return this.rootNode.data;
  }
  get right() {
    return this.rootNode.right;
  }

  get left() {
    return this.rootNode.left;
  }

  insert(value, currentNode = this.rootNode) {
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

  each(addToSortedArray, currentNode = this.rootNode) {
    if (currentNode.left) {
      this.each(addToSortedArray, currentNode.left);
    }

    addToSortedArray(currentNode.data);

    if (currentNode.right) {
      this.each(addToSortedArray, currentNode.right);
    }
  }
}