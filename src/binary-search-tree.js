const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    let isAdd = false;
    let tree = this.tree;
    if (tree == null) {
      this.tree = new Node(data);
    } else {
      while (!isAdd) {
        if (tree.data > data) {
          if (tree.right == null) {
            tree.right = new Node(data);
            isAdd = true;
          } else {
            tree = tree.right;
          }
        } else {
          if (tree.left == null) {
            tree.left = new Node(data);
            isAdd = true;
          } else {
            tree = tree.left;
          }
        }
      }
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');

    let tree = this.tree;
    while (true) {
      if (tree === null) return false;
      if (tree.data === data) return true;
      if (data > tree.data) {
        tree = tree.right;
      } else {
        tree = tree.left;
      }
    }


    // return this.data
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');


    let tree = this.tree;
    while (true) {
      if (tree === null) return null;
      if (tree.data === data) return tree;
      if (data > tree.data) {
        tree = tree.right;
      } else {
        tree = tree.left;
      }
    }
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    // throw new NotImplementedError('Not implemented');

    let tree = this.tree;
    let min = null;
    if (tree == null) return min;
    min = tree.data;
    while (true) {
      tree = tree.left;
      if (tree.data == null) {
        return min;
      } else {
        min = tree.data;
      }
    }
  }

  max() {
    // throw new NotImplementedError('Not implemented');

    let tree = this.tree;
    let max = null;
    if (tree == null) return max;
    max = tree.data;
    while (true) {
      tree = tree.right;
      if (tree.data == null) {
        return max;
      } else {
        max = tree.data;
      }
    }
  }

}