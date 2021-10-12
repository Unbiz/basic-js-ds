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
    if (tree === null) {
      this.tree = new Node(data);
    } else {
      while (!isAdd) {
        if (tree.data < data) {
          if (tree.right === null) {
            tree.right = new Node(data);
            isAdd = true;
          } else {
            tree = tree.right;
          }
        } else {
          if (tree.left === null) {
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
  }

  find(data) {
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
    this.tree = this.removeNode(this.tree, data);
  }

  removeNode(node, data) {
    let tree = node;
    if (tree === null) {
      return null;
    } else if (data < tree.data) {
      tree.left = this.removeNode(tree.left, data);
      return tree;
    } else if (data > tree.data) {
      tree.right = this.removeNode(tree.right, data);
      return tree;
    } else {
      if (tree.left === null && tree.right === null) {
        tree = null;
        return tree;
      }

      if (tree.left === null) {
        tree = tree.right;
        return tree;
      } else if (tree.right === null) {
        tree = tree.left;
        return tree;
      }

      const needMinNode = this.findMinNode(tree.right);
      tree.data = needMinNode.data;
      tree.right = this.removeNode(tree.right, needMinNode.data);
      return tree;
    }
  }

  findMinNode(node) {
    let tree = node;
    if (tree.left === null) {
      return tree;
    } else {
      return this.findMinNode(node.left);
    }
  }

  min() {
    let tree = this.tree;
    let min = null;
    if (tree == null) return min;
    min = tree.data;
    while (true) {
      tree = tree.left;
      if (tree == null) {
        return min;
      } else {
        min = tree.data;
      }
    }
  }

  max() {
    let tree = this.tree;
    let max = null;
    if (tree == null) return max;
    max = tree.data;
    while (true) {
      tree = tree.right;
      if (tree == null) {
        return max;
      } else {
        max = tree.data;
      }
    }
  }



}