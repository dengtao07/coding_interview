// 反转链表
// input: 1->2->3->null
// output: 3->2->1->null

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// 迭代版本
// 思路：将 1->2->3->null 反转，其实是每个ListNode的位置不变，改变各个ListNode之前next指针的指向: null<-1<-2<-3
// 所以其实就是从list的头结点往后遍历，每次将当前节点（cur）的next指针重新指向他的上一个节点（prev），然后再往后移动一位
// 小技巧是：每一次迭代都需要保存当前节点的 prev 和 next
function reverseList(head) {
  let prev = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

const list1 = new ListNode(1);
const list2 = new ListNode(2);
const list3 = new ListNode(3);
list2.next = list3;
list1.next = list2;
console.log(list1);
// console.log(reverseList(list1));

// 递归版本
// n1->n2->...->nk->nk+1...->nm->null
// 递归版本的思路是假设 nk后面的节点已经反转好：n1->...nk-1->nk<-nk+1...<-nm<-null
function reverseList1(headNode) {
  const head = headNode;
  if (head == null || head.next == null) {
    return head;
  }
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

console.log(reverseList1(list1));
