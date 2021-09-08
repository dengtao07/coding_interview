// 1.转换成整数，相加，再除以倍数, 后面小数位数很长的情况下，大数相加会出错
function add(num1, num2) {
  const num1Digits = (num1.toString().split('.')[1] || '').length;
  const num2Digits = (num2.toString().split('.')[1] || '').length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  return (num1 * baseNum + num2 * baseNum) / baseNum;
}

// 2.toFixed方法
let result = 100.1 + 9.8;
console.log(result);
console.log(result.toFixed(2));

// 3,
function strip(num, precision = 12) {
  return parseFloat(num.toPrecision(precision));
}

console.log(parseFloat((0.1 + 0.2).toPrecision(12)) === 0.3); // true

// 4.大数相加吗，转成字符串去做，小数部分相加，整数部分相加
