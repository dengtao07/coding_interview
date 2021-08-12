// 柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数。
// 函数柯里化的核心其实就是：
// 1、每一次都返回一个柯里函数
// 2、每一次都将当前调用传入的参数记录下来，推入到参数列表中去
// 3、最后使用函数的隐式转换，调用真正想要执行的函数

/* 普通的curry函数 */
function add(...args) {
  return args.reduce((prev, cur) => prev + cur, 0);
}

function curry(fn, ...args) {
  function curried(..._args) {
    args.push(..._args);
    return curried;
  }

  curried.toString = function () {
    // return fn.apply(null, args);
    return fn(...args);
  };

  return curried;
}

const curriedAddFn = curry(add);
console.log(+curriedAddFn(1, 1)(2, 2)(3));

/* 参数有长度的curry函数 */
function curryWithLength(fn, ...args) {
  const argLength = fn.length;
  function curryFn(..._args) {
    args.push(..._args);
    if (args.length >= argLength) {
      return fn(...args);
    }
    return curryFn;
  }

  return curryFn;
}

function addFnWithLength(a, b, c, d) {
  return Array.from(arguments).reduce((prev, cur) => {
    return prev + cur;
  }, 0);
}

const curriedAddFnWithLength = curryWithLength(addFnWithLength);
console.log(curriedAddFnWithLength(1)(2)(3)(4));

/* lodash的curry */
const _ = require('lodash');

let abc = function (a, b, c) {
  return [a, b, c];
};

let curried = _.curry(abc);

const a = curried(1)(2)(3);
console.log(a);

const lodashCurry = _.curry(add);
console.log(lodashCurry(1)(2)(3));
