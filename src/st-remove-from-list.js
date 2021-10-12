const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  let current = l;
  const result = {};
  let temp = result;
  let endOfList = false;
  do {
    if (current.value !== k) {
      temp.value = current.value;
      if (current.next === null) {
        endOfList = true;
        temp.next = null;
      } else {
        temp.next = {};
        temp = temp.next;
      }
    }
    current = current.next;
  } while (!endOfList);
  return result;
}
