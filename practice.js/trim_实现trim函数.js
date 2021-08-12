// 实现trim函数

// String.prototype.trim, trim(str), 作用是去除字符串前后的空格；

String.prototype.trimFn = function () {
  const reg = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  return this.replace(reg, '');
};
console.log('  11123123      11 '.trimFn());
