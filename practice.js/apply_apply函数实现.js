// 实现apply函数
// apply函数的用法：function.apply(context, arguments)
// 原理其实就是在context对象上临时新建一个函数，将函数执行时的this指向修改掉，函数执行完成后还需要新建的函数删除掉
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
// person1.sayName.apply(person2);

Function.prototype.applyFn = function (thisArg, args) {
  const context = thisArg || window;
  const tempFunc = Symbol('tempFunc'); // 最好是使用symbol去创创建对象上的属性，因为键名可能跟原对象上的键名是重复的
  context[tempFunc] = this;
  const res = context[tempFunc](args);
  delete context[tempFunc];
  return res;
};

const person1 = {
  name: 'tao',
  sayName(nameList) {
    console.log(`${this.name} ${nameList}`);
  },
};

const person2 = {
  name: 'lee',
};

const res = person1.sayName.applyFn(person2, ['1', '2', '3']);
console.log(res);
