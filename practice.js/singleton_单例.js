// 实现单例模式
class Singleton {
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

Singleton.getInstance1 = (function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new Singleton();
    }
    return instance;
  };
}());

const a = Singleton.getInstance();
const b = Singleton.getInstance();
const c = Singleton.getInstance1();
const d = Singleton.getInstance1();

// console.log(a === b);
// console.log(c === d);

// 实现一个全局的单例Storage
class Store {
  constructor() {
    this.obj = {};
  }

  static getInstance() {
    if (!Store.instance) {
      Store.instance = new Store();
    }
    return Store.instance;
  }

  getItem(item) {
    return this.obj[item];
  }

  setItem(item, value) {
    this.obj[item] = value;
  }
}

const store1 = Store.getInstance();
const store2 = Store.getInstance();
store1.setItem('name', 'tao');
console.log(store1.getItem('name'));
console.log(store2.getItem('name'));
console.log(store1 === store2);
