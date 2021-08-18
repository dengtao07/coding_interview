// 实现数组的forEach

// 分析
// 首先forEach的用法是：forEach(function(item, index, array), context)

Array.prototype.forEachFn = function (fn, context = this) {
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    fn.call(context, element, index, this);
  }
};

const arr = [1, 2, 3];
const arr1 = [4, 5, 6];

arr.forEachFn(function (item, index, array) {
  console.log(item, index, array, this);
}, arr1);

// 注意箭头函数中的this是函数定义的时候决定的
arr.forEachFn((item, index, array) => {
  console.log(item, index, array, this);
}, arr1);

arr.forEach(function (item, index, array) {
  console.log(item, index, array, this);
}, arr1);
