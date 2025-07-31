//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Zipper {
  constructor(tree, parents = []) {
    this.tree = tree;
    this.parents = parents;
  }

  static fromTree(tree) {
    return new Zipper(tree);
  }

  toTree() {
    return this.parents.length > 0 ? this.parents[0] : this.tree;
  }

  value() {
    return this.tree.value;
  }

  left() {
    this.parents.push(this.tree);
    return this.tree.left ?  new Zipper(this.tree.left, this.parents) : null;
  }

  right() {
    this.parents.push(this.tree);
    return this.tree.right ?  new Zipper(this.tree.right, this.parents) : null;
  }

  up() {
    return this.parents.length > 0 ? new Zipper(this.parents[this.parents.length - 1], this.parents) : null;
  }

  setValue(value) {
    this.tree.value = value;
    
    return new Zipper(this.parents[this.parents.length - 1], this.parents);
  }

  setLeft(input) {
    const newTree = {
      value: this.tree.value,
      left: input,
      right: this.tree.right
    }

    if (this.parents.length > 0) {
      const parent = this.parents[this.parents.length - 1];

      if (parent.left === this.tree) {
        parent.left = newTree;
      } else if (parent.right === this.tree) {
        parent.right = newTree;
      }
    }

    return new Zipper(newTree, this.parents);
  }

  setRight(input) {
    const newTree = {
      value: this.tree.value,
      left: this.tree.left,
      right: input
    }

    if (this.parents.length > 0) {
      const parent = this.parents[this.parents.length - 1];

      if (parent.right === this.tree) {
        parent.right = newTree;
      } else if (parent.left === this.tree) {
        parent.left = newTree;
      }
    }

    return new Zipper(newTree, this.parents);
  }
}

function bt(value, left, right) {
  return {
    value,
    left,
    right,
  };
}

function leaf(value) {
  return bt(value, null, null);
}


const t1 = bt(1, bt(2, null, leaf(3)), leaf(4));
const t3 = bt(1, bt(2, leaf(5), leaf(3)), leaf(4));
let zipper = Zipper.fromTree(t1);

// zipper.left().setLeft(leaf(5));
const myT = zipper.left().setLeft(leaf(5)).toTree();
console.log(myT);
console.log(t3);
console.log(zipper.left().setLeft(leaf(5)).toTree() === t3);