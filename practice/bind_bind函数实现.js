// 实现bind函数
// 首先是bind函数的用法：
// const newFn = fn.bind(thisArg, ...args)

// 原理：在制定的this指向上新建一个函数，并传入参数；返回值是绑定好this指向的新函数
Function.prototype.bindFn = function (thisArg, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
  }
  const context = thisArg || window;
  context.tempFn = this;
  return function (..._args) {
    context.tempFn(...args, ..._args);
  };
};

const person1 = {
  name: 'tao',
  sayName(...nameList) {
    console.log(`${this.name} ${nameList}`);
  },
};

const person2 = {
  name: 'lee',
};

const newFn = person1.sayName.bindFn(person2, 'deng', 'guo');
newFn('li', 'wang');
console.log(person2); // { name: 'lee', tempFn: [Function: sayName] }
// 8.7补充，这种做法实际上是有问题的，如上所示，其实是在person2中添加了一个函数，但是原生的bind函数并没有这么做
// 将上面代码注释掉，跑下面代码
const newFn1 = person1.sayName.bind(person2, 'deng', 'tao');
newFn1('li', 'wang');
console.log(person2);

/* ----------------------------------------- 正确的实现方式 ----------------------------------------- */
// 使用 call 和 apply 间接去实现bind，如果面试官有疑问，再讲call或者apply实现一遍就行，call和apply的实现方式就是在对象上临时新增一个方法，调用完后再将其删除
Function.prototype.bindFn1 = function (context, ...args) {
  const fn = this;
  if (typeof fn !== 'function') {
    throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
  }
  context = context || window;
  return function (...params) {
    fn.call(context, ...args, ...params);
  };
};

const newFn = person1.sayName.bindFn1(person2, 'deng', 'guo');
newFn('li', 'wang');
console.log(person2);
