// 高阶函数，需满足二者之一：1、接受一个或多个函数作为参数 2、返回一个新的函数
// Array.prototype.map() 就是一个典型的高阶函数

// 题目：实现高阶函数maxBy，可根据传入的字符串或者方法进行排序
// 用法: maxBy(array, iterator) 或者 maxBy(array, string)

function maxBy(arr, fn) {
  let newArr = [];
  if (fn === undefined) {
    return Math.max(...arr);
  } if (typeof fn === 'string') {
    newArr = arr.map((item) => item[fn]);
  } else if (typeof fn === 'function') {
    newArr = arr.map((item) => fn(item));
  } else {
    throw new Error('typeof fn is not support');
  }
  const maxNum = Math.max(...newArr);
  const indexArr = [];
  newArr.forEach((item, index) => {
    if (item === maxNum) {
      indexArr.push(index);
    }
  });
  return indexArr.map((index) => {
    return arr[index];
  });
}

const arr = [{ name: 'lee', age: 11, work: 1 }, { name: 'tao', age: 11, work: 2 }];
console.log(maxBy(arr, 'age'));
console.log(maxBy(arr, (item) => { return item.age + item.work; }));
