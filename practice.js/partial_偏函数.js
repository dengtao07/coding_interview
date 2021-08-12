// 偏函数是固定一个函数的一个或者多个参数，也就是将一个 n 元函数转换成一个 n - x 元函数。

function partial(fn, ...args) {
  return function (..._args) {
    args.push(..._args);
    return fn.apply(this, args);
  };
}

function add(a, b) {
  return a + b + this.value;
}

let addOne = partial(add, 1);
let value = 1;
let obj = {
  value: 2,
  addOne,
};

// let addOne = add.bind(null, 1);

console.log(obj.addOne(2));
