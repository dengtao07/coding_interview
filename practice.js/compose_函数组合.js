// 实现函数组合
// 比如：有多个函数嵌套调用，const res = d(c(b(a(x))))，这样很难理解，嵌套过深也不好看
// 期望有一个compose函数去组合这些函数，让她们能够嵌套调用
// 用法: const composedFn = compose(d, c, b, a)，函数从右到左依次调用

function compose(...funcs) {
  if (funcs.length === 0) {
    return (...args) => args;
  } if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((prev, cur) => (...args) => prev(cur(...args)));
}

const a = compose();
console.log(a(1, 2, 3));

function toUpperCase(str) {
  return str.toUpperCase();
}

function addSomeWords(str) {
  return `${str} ok`;
}

function addOn(str) {
  return addSomeWords(toUpperCase(str));
}
console.log(addOn('tao'));

const composedFn = compose(addSomeWords, toUpperCase);
console.log(composedFn('tao'));
