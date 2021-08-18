// 实现call函数
// call函数的用法：function.call(context, ...arguments)
// 原理其实就是在context对象上临时新建一个函数，将函数执行时的this指向修改掉，函数执行完成后还需要将新建的函数删除掉
// 需要注意的是如果传null或者undefined，会被自动替换为全局对象

// const person1 = {
//   name: 'tao',
//   sayName() {
//     console.log(this.name);
//   },
// };

// const person2 = {
//   name: 'lee',
// };
// person1.sayName();
// person1.sayName.call(person2);

Function.prototype.callFn = function (thisArg, ...args) {
  const context = thisArg || window;
  const tempFunc = Symbol('tempFunc'); // 最好是使用symbol去创创建对象上的属性，因为键名可能跟原对象上的键名是重复的
  context[tempFunc] = this;
  const res = context[tempFunc](...args);
  delete context[tempFunc];
  return res;
};

const person1 = {
  name: 'tao',
  sayName(lastName) {
    console.log(`${this.name} ${lastName}`);
  },
};

const person2 = {
  name: 'lee',
};

// const res = person1.sayName.callFn(person2, '132');
// console.log(res);
let map = Array.prototype.map;
const res = map.callFn('123', (item) => { return item; });
console.log(res);
