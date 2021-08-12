// 数字千分位分隔

// 正常遍历
function splitNumByThree(str) {
  let newStr = '';
  let count = 1;
  for (let index = str.length - 1; index >= 0; index--) {
    const char = str[index];
    if (count === 3 && index !== 0) {
      newStr = `,${char}${newStr}`;
      count = 1;
    } else {
      newStr = `${char}${newStr}`;
      count++;
    }
  }
  return newStr;
}

// 正则表达式
// 思路：找到一个数字，满足：它后面的数字的位数是3的倍数，将这个数字替换为：'数字,'
// 使用了正则中的两个知识点：1、正向前瞻 2、使用$1, $2作为捕获到的分组的引用
function splitNumByThree1(str) {
  const reg = /(\d)(?=(\d{3})+$)/g;
  return str.replace(reg, '$1,');
}

// Number.toLocaleString('en-US');
// toLocaleString() 方法返回这个数字在特定语言环境下的表示字符串
function splitNumByThree2(num) {
  return num.toLocaleString('en-US');
}

console.log(splitNumByThree('123456789'));
console.log(splitNumByThree('123456'));
console.log(splitNumByThree('123'));
console.log(splitNumByThree('12'));

console.log(splitNumByThree1('123456789'));
console.log(splitNumByThree1('123456'));
console.log(splitNumByThree1('123'));
console.log(splitNumByThree1('12'));

console.log(splitNumByThree2(123456789));
console.log(splitNumByThree2(123456));
console.log(splitNumByThree2(123));
console.log(splitNumByThree2(12));
