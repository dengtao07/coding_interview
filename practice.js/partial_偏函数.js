// 偏函数（或者叫部分函数应用）是固定一个函数的一个或者多个参数，也就是将一个 n 元函数转换成一个 n - x 元函数。

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

/* 偏函数的应用 */
// 假设一个通用的请求 API
const request = (type, url, options) => ...
// GET 请求
request('GET', 'http://....')
// POST 请求
request('POST', 'http://....')

// 但是通过部分调用后，我们可以抽出特定 type 的 request
const get = request('GET');
get('http://', {..})
