/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let mergedList = new ListNode();
  let current = mergedList;

  if (!list1 || !list2) return list1 || list2;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      current.next = list2;
      list2 = list2.next;
    } else {
      current.next = list1;
      list1 = list1.next;
    }

    current = current.next;
  }

  if (!list1) {
    current.next = list2;
  } else {
    current.next = list1;
  }

  return mergedList.next;
};

// Recursive solution, really interesting:

// var mergeTwoLists = function (list1, list2) {
//   if (!list1 || !list2) return list1 || list2;
//   if (list1.val < list2.val) {
//     return new ListNode(list1.val, mergeTwoLists(list1.next, list2));
//   }
//   return new ListNode(list2.val, mergeTwoLists(list1, list2.next));
// };
