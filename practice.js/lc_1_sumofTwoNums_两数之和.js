// 给定数组，和指定值，找出数组中的两个数，之和等于指定值

function twoNumAdd(list, target) {
  const listCopy = [...list];
  const hashMap = new Map();
  for (let index = 0; index < listCopy.length; index++) {
    const element = listCopy[index];
    if (hashMap.has(target - element)) {
      return [index, hashMap.get(target - element)];
    }
    hashMap.set(element, index);
  }
  return [];
}

const a1 = [1, 2, 2, 2, 2, 4];
console.log(twoNumAdd(a1, 4));
console.log(twoNumAdd(a1, 6));

// 变式， 寻找n个数字之和为指定值
function multiNumsAdd(list, target) {
  const listCopy = [...list];
}
