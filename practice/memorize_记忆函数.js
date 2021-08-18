// 写一个记忆函数，记录函数运算的结果

function memorize(fn, getKey) {
  function memorizedFn(...args) {
    const cache = memorizedFn.cache;
    const key = getKey ? getKey(...args) : args[0];
    if (!cache[key]) {
      cache[key] = fn(...args);
    }
    return cache[key];
  }
  memorizedFn.cache = {};
  return memorizedFn;
}

// 直接内置生成key的函数
function memorize1(fn) {
  function memorizedFn(...args) {
    const cache = memorizedFn.cache;
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = fn(...args);
    }
    return cache[key];
  }
  memorizedFn.cache = {};
  return memorizedFn;
}

function add(a, b) {
  console.log('执行了一次');
  return a + b;
}

function getKey(...args) {
  return JSON.stringify(args);
}

const memorizedFn = memorize(add, getKey);
const res1 = memorizedFn(1, 2);
console.log(res1);
const res2 = memorizedFn(1, 2);
console.log(res2);

/* 斐波那契 */
let count = 0;
function fibonacci(num) {
  count++;
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.time('没有记忆');
fibonacci(40);
console.log(count);
console.timeEnd('没有记忆');

let memorizedCount = 0;
function memorizedFib(num) {
  memorizedCount++;
  if (num === 0) return 0;
  if (num === 1) return 1;
  return memorizedFib(num - 1) + memorizedFib(num - 2);
}

memorizedFib = memorize(memorizedFib);
console.time('有记忆');
memorizedFib(40);
console.log(memorizedCount);
console.timeEnd('有记忆');

/* 阶乘 */

function factorial(n) {
  return (n <= 1) ? 1 : n * factorial(n - 1);
}
