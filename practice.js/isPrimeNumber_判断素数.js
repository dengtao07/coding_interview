// 判断素数，素数（质数）就是除了1和它本身，不能被其他整数整除的正整数；反之成为合数；
// 特例：1既不是素数也不是合数

// https://blog.csdn.net/huang_miao_xin/article/details/51331710

// 普通方法
function isPrimeNumber(num) {
  for (let index = 2; index < num; index++) {
    if (num % index === 0) {
      return false;
    }
  }
  return true;
}

// 优化方法，原理是：任何一个正整数，他的两个因数，必须是一个大于其平方根，一个小于其平方根，因此如果
// 循环到其平方根都还没有找到因数，那么就不可能有其他因数了
function isPrimeNumber1(num) {
  for (let index = 2; index <= Math.sqrt(num); index++) {
    if (num % index === 0) {
      return false;
    }
  }
  return true;
}

const arr = [];
for (let index = 1; index <= 100000; index++) {
  arr.push(index);
}

console.time('普通方法');
arr.forEach((element) => {
  isPrimeNumber(element);
});
console.timeEnd('普通方法');

console.time('优化方法');
arr.forEach((element) => {
  isPrimeNumber1(element);
});
console.timeEnd('优化方法');

// 题型变化：统计所有小于非负整数n的质数
// 注意单一职责问题，能独立出来的函数，一定独立成函数
function getAllPrimeNumber(n) {
  if (n === 0) return 0;
  if (n === 1) return 0;
  let count = 0;
  function isPrimeNumber3(num) {
    for (let index = 2; index <= Math.sqrt(num); index++) {
      if (num % index === 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = 2; i < n; i++) {
    count += +isPrimeNumber3(i);
  }
  return count;
}
