// 实现菲波那切数列，这里约定 第一二个数字都是 1，索引从 0 开始

// f(n) = f(n-1) + f(n-2), f(1) = 1, f(0) = 1

function fibonacci(num) {
  if (num === 0) return 1;
  if (num === 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(3));
console.log(fibonacci(20));

function fibonacci2(num) {
  if (num === 0) return 1;
  if (num === 1) return 1;
  let cur = 0;
  let num1 = 1;
  let num2 = 1;
  for (let index = 2; index <= num; index++) {
    cur = num1 + num2;
    num1 = num2;
    num2 = cur;
  }
  return cur;
}

console.log(fibonacci2(3));
console.log(fibonacci2(20));

function fibonacci3(num) {
  const list = [1, 1];
  let cur = 0;
  let num1 = 1;
  let num2 = 1;
  for (let index = 2; index <= num; index++) {
    cur = num1 + num2;
    list.push(cur);
    num1 = num2;
    num2 = cur;
  }
  return list;
}

console.log(fibonacci3(10));

function fibonacci4(n) {
  let p = 0;
  let q = 0;
  let r = 1;
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
}

console.log(fibonacci4(20));

// 最好理解的还是
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let cur;
  let num1 = 0;
  let num2 = 1;
  for (let index = 2; index <= n; index++) {
    cur = num1 + num2;
    num1 = num2;
    num2 = cur;
  }
  return cur;
}