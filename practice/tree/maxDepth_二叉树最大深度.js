// 求二叉树最大深度

// 思路： 使用深度优先遍历
// 事件复杂度：O(n), 因为每个节点只会被递归一次
// 空间复杂度：递归过程中要生成调用栈，二叉树的每一层都只有一个节点时最差，为O(n)；二叉树均匀分布时最好，为O(logn)

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

function maxDepth(root) {
  let res = 0;
  function dfs(tree, depth) {
    if (!tree) { return false; }
    if (!tree.left && !tree.right) {
      res = Math.max(res, depth);
    }
    dfs(tree.left, depth + 1);
    dfs(tree.right, depth + 1);
  }
  dfs(root, 1);
  return res;
}

console.log(maxDepth(bt));
