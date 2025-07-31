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

  insert(value, currentNode) {
    if (!currentNode) {
      currentNode = this.rootNode;
    }

    while (currentNode.left && currentNode.right) {
      currentNode = value <= currentNode.data ? currentNode.left : currentNode.right;
    }

    let traverseOrAddNode;

    if (currentNode.left) {

      traverseOrAddNode = (value <= currentNode.left.data || value <= currentNode.data);
      traverseOrAddNode ? this.insert(value, currentNode.left) : currentNode.right = this.createNode(value);

    } else if (currentNode.right) {

      traverseOrAddNode = (value > currentNode.right.data || value > currentNode.data);
      traverseOrAddNode ? this.insert(value, currentNode.right) : currentNode.left = this.createNode(value);
      
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
      currentNode = this.rootNode;
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