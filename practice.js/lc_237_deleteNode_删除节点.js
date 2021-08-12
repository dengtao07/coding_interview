// 删除链表中的某个节点
// 1->2->3->4->null 删除3 1->2->4->null
// 这道题在leetcode上是个脑静急转弯，传到函数里的直接就是要被删除掉的节点，思路就是：
// 如何让自己消失但是又不死？将自己变成另一个人，将那个人杀掉
// var deleteNode = function(node) {
//   node.val = node.next.val;
//   node.next = node.next.next;
// };

// 下面写的是正常情况下如何删除一个节点

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list1 = new ListNode(1);
const list2 = new ListNode(2);
const list3 = new ListNode(3);
list2.next = list3;
list1.next = list2;

function deleteNode(head, target) {
  let cur = head;
  if (cur.value === target) {
    return cur.next;
  }
  while (cur) {
    const next = cur.next;
    if (next.value === target) {
      cur.next = next.next;
      return head;
    }
    cur = next;
  }
  return head;
}
console.log(list1);
console.log(deleteNode(list1, 2));
