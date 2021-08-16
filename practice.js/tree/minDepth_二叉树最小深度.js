// 求二叉树最小深度

// 思路： 使用广度优先遍历，遇到叶子节点，直接返回最小深度
const bt = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

function minDepth(root) {
  if (!root) return 0;
  const queue = [[root, 1]];
  while (queue.length) {
    const [head, depth] = queue.shift();
    if (!head.left && !head.right) {
      return depth;
    }
    if (head.left) queue.push([head.left, depth + 1]);
    if (head.right) queue.push([head.right, depth + 1]);
  }
}

console.log(minDepth(bt));
