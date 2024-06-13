const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

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
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// function createCounter() {
//   let count = 0;
//   function increment() {
//    return count++;
//   }
//   function decrement() {
//     return count--;
//   }
//   return { count, increment, decrement };
// }
// const result = createCounter();
// console.log(result.increment());

function change(x) {
  x = 2 * x;
  console.log("x in change:", x);
}

let n = 10;
console.log("n before change:", n); // n before change: 10
change(n); // x in change: 20
console.log("n after change:", n);
