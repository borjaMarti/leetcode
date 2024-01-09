/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let current = head;
  let nth = head;

  for (let i = 0; i < n; i++) {
    current = current.next;
  }

  if (!current) {
    return nth.next;
  }

  while (current) {
    if (!current.next) {
      nth.next = nth.next.next;
      break;
    }

    nth = nth.next;
    current = current.next;
  }

  return head;
};

// Simplified version of the while loop:

// var removeNthFromEnd = function (head, n) {
//   let current = head;
//   let nth = head;

//   for (let i = 0; i < n; i++) {
//     current = current.next;
//   }

//   if (!current) {
//     return nth.next;
//   }

//   while (current.next) {
//     nth = nth.next;
//     current = current.next;
//   }

//   nth.next = nth.next.next;

//   return head;
// };
