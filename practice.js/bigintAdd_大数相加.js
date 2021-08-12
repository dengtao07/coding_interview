// 实现大数相加
// https://zhuanlan.zhihu.com/p/72179476
// js存放整数的时候是有精度范围的，超过最大精度就会出现误差，只能将大数专为字符串进行计算

function add(p1, p2) {
  let a = p1;
  let b = p2;
  // 取两个数字的最大长度
  const maxLength = Math.max(a.length, b.length);
  // 用0去补齐长度
  a = a.padStart(maxLength, 0);// "0009007199254740991"
  b = b.padStart(maxLength, 0);// "1234567899999999999"
  // 定义加法过程中需要用到的变量
  let t = 0;
  let f = 0; // "进位"
  let sum = '';
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i], 10) + parseInt(b[i], 10) + f;
    f = Math.floor(t / 10);
    sum = t % 10 + sum;
  }
  if (f === 1) {
    sum = `1${sum}`;
  }
  return sum;
}

const num1 = '9007199254740991';
const num2 = '1234567899999999999';

console.log(add(num1, num2));

function bigIntAdd(p1, p2) {
  let str1 = p1;
  let str2 = p2;
  const maxLength = Math.max(str1.length, str2.length);
  str1 = str1.padStart(maxLength, 0);
  str2 = str2.padStart(maxLength, 0);
  let cur = 0;
  let carry = 0;
  let sum = '';
  for (let index = maxLength - 1; index >= 0; index--) {
    cur = parseInt(str1[index], 10) + parseInt(str2[index], 10) + carry;
    carry = Math.floor(cur / 10);
    sum = cur % 10 + sum;
  }
  if (carry === 1) {
    sum = `1${sum}`;
  }
  return sum;
}

const a = '8989778977977979';
const b = '13123545345346457677';

console.log(bigIntAdd(num1, num2));
console.log(bigIntAdd(a, b));
