// 展开嵌套的数组
// 面试的时候就写普通的递归版本和栈的版本

// 递归
function flatten(arr) {
  let flattenArray = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattenArray = flattenArray.concat(flatten(element));
    } else {
      flattenArray.push(element);
    }
  });
  return flattenArray;
}

// 迭代
// 原理： [].concat(1,2,3) === [1, 2, 3], [].concat([1, 2, 3]) === [1, 2, 3]
// concat方法传入参数列表和数组都会将其打平
function flatten1(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr); // 使用[...arr]是不行的
  }
  return arr;
}

// reduce
const flat = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
  }, []);
};

// 栈
// 栈思想
function flatStack(arr) {
  const result = [];
  const stack = [].concat(arr); // 将数组元素拷贝至栈，直接赋值会改变原数组
  // 如果栈不为空，则循环遍历
  while (stack.length !== 0) {
    const val = stack.pop();
    if (Array.isArray(val)) {
      stack.push(...val); // 如果是数组再次入栈，并且展开了一层
    } else {
      result.unshift(val); // 如果不是数组就将其取出来放入结果数组中
    }
  }
  return result;
}

const b = [1, 2, 3, 3, [4], [5]];
const a = [[1, 2, 3, [5, [[[1111]]]], 4]];
console.log(flatten(b));
console.log(flatten1(b));
console.log(flat(b));
console.log(flatStack(b));
