function dfsRecursion(tree, name) {
  // 候选人代码实现
  if (tree.name === name) {
    return {
      name: tree.name,
      code: tree.code,
    };
  }
  if (tree.children) {
    for (let index = 0; index < tree.children.length; index++) {
      const res = dfsRecursion(tree.children[index], name);
      if (res) return res;
    }
  }
  return null;
}
let tree = {
  name: '中国',
  children: [
    {
      name: '北京',
      children: [
        {
          name: '朝阳群众',
        },
        {
          name: '海淀区',
        },
        {
          name: '昌平区',
        },
      ],
    },
    {
      name: '浙江省',
      children: [
        {
          name: '杭州市',
          code: '0571',
        },
        {
          name: '嘉兴市',
        },
        {
          name: '绍兴市',
        },
        {
          name: '宁波市',
        },
      ],
    },
  ],
};

let node = dfsRecursion(tree, '杭州市');
console.log(node);
