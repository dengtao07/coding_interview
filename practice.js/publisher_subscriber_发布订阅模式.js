// 观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新

// 实现发布订阅者模式
// 观察者模式和发布订阅者模式之间的区别是：
// 观察者模式中，事件的发布者可以直接操作事件的订阅者
// 而发布订阅模式中，事件的发布者是不能直接操作订阅者的，需要通过事件中心完成交互，实现了发布者与订阅者之间的完全解耦
// 高级点的说法是：观察者模式中，观察者和被观察者是耦合的，被观察者需要维护观察者列表，而观察者则需要实现
// 回调函数供被观察者调用；在发布订阅模式中，发布者和订阅者是完全解耦的，没有出现具体的发布者和订阅者，事件的发布和订阅都在事件中心上完成

// 二者并没有优劣，取决于实际使用中发布者和订阅者之间是否真的需要完全解耦

// 发布订阅模式最好的例子就是总线模式

// 出错的两个地方：
// 1、找元素在数组中的索引，有可能是0，使用if(index)是不行的，需要使用if(index > -1)
// 2、off中删除的回调应该是被包裹的回调函数，而不是直接传入的回调函数
// 3、emit中需要将handlers拷贝一份，防止在once在中删除回调引起后一个handler被跳过

class EventBus {
  constructor() {
    this.handlers = {};
  }

  // 设置监听事件
  on(eventName, handler) {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(handler);
  }

  // 触发事件，发布事件
  emit(eventName, ...args) {
    if (this.handlers[eventName]) {
      // 这里需要对 this.handlers[eventName] 做一次浅拷贝，主要目的是为了避免通过 once 安装的监听器在移除的过程中出现顺序问题
      // 删除后，index就会往前移动一位，导致有一个元素被跳过
      const handlers1 = this.handlers[eventName].slice();
      handlers1.forEach((handler) => {
        handler(...args);
      });
    } else {
      console.log('没有监听该事件');
    }
  }

  // 移除一个事件中的某个事件的某个回调函数
  off(eventName, handler) {
    const handlers = this.handlers[eventName];
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    } else {
      console.log('没有监听该事件');
    }
  }

  // 回调函数只执行一遍
  once(eventName, handler) {
    const wrapper = (...args) => {
      handler(...args);
      this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
  }

  // 删除某个事件的所有回调函数
  removeAll(eventName) {
    if (this.handlers[eventName]) {
      delete this.handlers[eventName];
    }
  }
}

const bus = new EventBus();
// const cb = (...args) => { console.log(`事件a的另外一个回调函数，参数为${args}`); };

// bus.on('a', (...args) => { console.log(`触发了事件a，参数为${args}`); });
// bus.on('b', (...args) => { console.log(`触发了事件b，参数为${args}`); });
// bus.on('a', cb);

// bus.emit('a', 1, 2, 3);
// bus.emit('b', 4, 5, 6);
// bus.off('a', cb);

// console.log('//////');
// bus.emit('a', 1, 2, 3);

// console.log('//////');
bus.once('c', (...args) => { console.log(`该事件是一次性的, 参数为: ${args}`); });
bus.on('c', () => { console.log('持续的监听'); });
bus.emit('c', 123123);
bus.emit('c');
// console.log(bus.handlers);
