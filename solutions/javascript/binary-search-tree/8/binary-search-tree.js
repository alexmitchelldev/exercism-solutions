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
    const way = value <= currentNode.data ? 'left' : 'right';
    if (currentNode[way]) {
      this.insert(value, currentNode[way]);
    } else {
      currentNode[way] = this.createNode(value);
    }
  }

  each(addToSortedArray, currentNode = this.rootNode) {
    if (currentNode) {
      this.each(addToSortedArray, currentNode.left);
      addToSortedArray(currentNode.data);
      this.each(addToSortedArray, currentNode.right);
    }
  }
}