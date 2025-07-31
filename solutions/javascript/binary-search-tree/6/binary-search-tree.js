export class BinarySearchTree {
  constructor(value) {
    this.rootNode = this.createNode(value);
    this.direction = {
      left: 1,
      right: 2
    }
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
    const way = value <= currentNode.data ? 'left' : 'right';
    if (way === 'left') {
      if (currentNode.left) {
        this.insert(value, currentNode.left);
      } else {
        currentNode.left = this.createNode(value);
      }
    } else if (way === 'right') {
      if (currentNode.right) {
        this.insert(value, currentNode.right);
      } else {
        currentNode.right = this.createNode(value);
      }
    }
    // if (way === 'left') {
    //   currentNode.left ? this.insert(value, currentNode.left) : currentNode.left = this.createNode(value);
    // } else if (way === 'right') {
    //   currentNode.right ? this.insert(value, currentNode.right) : currentNode.right = this.createNode(value);
    // }
  }

  each(addToSortedArray, currentNode = this.rootNode) {
    if (currentNode) {
      this.each(addToSortedArray, currentNode.left);
      addToSortedArray(currentNode.data);
      this.each(addToSortedArray, currentNode.right);
    }
  }
}