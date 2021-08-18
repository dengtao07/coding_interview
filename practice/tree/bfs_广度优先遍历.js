// 实现树的广度优先遍历
const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: [],
        },
        {
          val: 'e',
          children: [],
        },
      ],
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: [],
        },
        {
          val: 'g',
          children: [],
        },
      ],
    },
  ],
};

function bfs(root) {
  const queue = [root];
  while (queue.length) {
    const head = queue.shift();
    console.log(head.val);
    queue.push(...head.children);
  }
}

bfs(tree);
