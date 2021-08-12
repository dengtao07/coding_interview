class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
n1.next = n2;
n2.next = n1;

console.log(n1);

// 题目，判断链表是否有环

// 解法1：hashMap， 记录是否出现过
function findListCircle(head) {
  const map = new Map();
  let cur = head;
  while (cur !== null) {
    if (map.has(cur)) {
      return true;
    }
    map.set(cur, true);
    cur = cur.next;
  }
  return false;
}

console.log(findListCircle(n1));

// 解法2，追及法, 快慢指针
function findListCircleChase(head) {
  let fast = head;
  let slow = head;
  while (fast) {
    slow = slow.next;
    if (!fast.next) return false;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
}

console.log(findListCircleChase(n1));
