class A {
  constructor(name) {
    this.name = name; // 实例属性
  }

  // 原型上的方法
  sayHi() {
    console.log('hi');
  }

  // 静态方法，只存在于class A 上
  static sayHello() {
    console.log('Hello');
  }
}

const a1 = new A('a1');
const a2 = new A('a2');

console.log(a1.sayHi === a2.sayHi);
console.log(console.log(A.prototype));
