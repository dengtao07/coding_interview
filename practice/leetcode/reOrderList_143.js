class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
// const n6 = new ListNode(6);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
// n5.next = n6;

console.log(JSON.stringify(n1));

// 双指针
function reOrderList(list) {
  let head = list;
  const nodeArr = [];
  while (head) {
    nodeArr.push(head);
    head = head.next;
  }
  const length = nodeArr.length;
  let left = 0;
  let right = length - 1;
  while (left < right) {
    nodeArr[left].next = nodeArr[right];
    left++;
    if (left === right) {
      break;
    }
    nodeArr[right].next = nodeArr[left];
    right--;
  }
  nodeArr[left].next = null;
  return nodeArr[0];
}

// const newList = reOrderList(n1);
// console.log(JSON.stringify(newList));

// 寻找链表中间节点+链表逆序+合并链表
// https://leetcode-cn.com/problems/reorder-list/solution/zhong-pai-lian-biao-by-leetcode-solution/
function reOrderList1(head) {
  function findMidNode(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  function reverseList(head) {
    let prev = null;
    let cur = head;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }

  function mergeTwoList(l1, l2) {
    // 1,2,3
    // 5,4
    while (l1 && l2) {
      let l1next = l1.next;
      let l2next = l2.next;

      l1.next = l2;
      l1 = l1next;

      l2.next = l1;
      l2 = l2next;
    }
  }
  // 1,2,3,4,5
  // mid: 3,4,5
  // postHalf: 4,5
  let mid = findMidNode(head);
  let postHalf = mid.next;
  mid.next = null;
  let reversedPostHalf = reverseList(postHalf);
  mergeTwoList(head, reversedPostHalf);
}
reOrderList1(n1);

console.log(JSON.stringify(n1));
