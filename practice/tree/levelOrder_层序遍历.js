// 层序遍历

function levelOrder(root) {
  if (!root) return [];
  const queue = [[root, 0]]; // 注意，[[root, 0]]，这里第二个值是从0开始的，因为是数组的索引
  const res = [];
  while (queue.length) {
    const [head, depth] = queue.shift();
    if (!res[depth]) {
      res.push([head.val]);
    } else {
      res[depth].push(head.val);
    }
    if (head.left) queue.push([head.left, depth + 1]);
    if (head.right) queue.push([head.right, depth + 1]);
  }
  return res;
}
