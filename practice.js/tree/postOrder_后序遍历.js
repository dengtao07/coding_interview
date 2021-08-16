// 实现二叉树后序遍历

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

function postOrder(root) {
  if (!root) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
}

postOrder(bt);
