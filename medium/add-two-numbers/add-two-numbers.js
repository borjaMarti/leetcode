/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const n1 = [];
  const n2 = [];

  while (l1.next) {
    n1.push(l1.val);
    l1 = l1.next;
  }
  n1.push(l1.val);

  while (l2.next) {
    n2.push(l2.val);
    l2 = l2.next;
  }
  n2.push(l2.val);

  const sum =
    n1.length > 15 || n2.length > 15
      ? BigInt(n1.reverse().join("")) + BigInt(n2.reverse().join(""))
      : Number(n1.reverse().join("")) + Number(n2.reverse().join(""));
  const n3 = sum
    .toString()
    .split("")
    .map((dig) => +dig)
    .reverse();

  let l3 = new ListNode(n3.pop(), null);

  while (typeof n3[0] === "number") {
    l3 = new ListNode(n3.pop(), l3);
  }

  return l3;
};
