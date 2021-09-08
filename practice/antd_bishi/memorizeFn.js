const memoize = (fn) => {
  // 候选人代码实现
  function memorizedFn(...args) {
    const key = JSON.stringify(args);
    const memo = memorizedFn.memo;
    if (!memo[key]) {
      memo[key] = fn.apply(null, args);
    }
    return memo[key];
  }
  memorizedFn.memo = {};
  return memorizedFn;
};

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

console.log('------');

let memorizedCount = 0;
function memorizedFib(num) {
  memorizedCount++;
  if (num === 0) return 0;
  if (num === 1) return 1;
  return memorizedFib(num - 1) + memorizedFib(num - 2);
}
memorizedFib = memoize(memorizedFib);
console.time('有记忆');
memorizedFib(40);
console.log(memorizedCount);
console.timeEnd('有记忆');
