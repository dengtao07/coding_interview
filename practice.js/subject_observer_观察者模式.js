// 实现观察者模式

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  deleteObserver(observer) {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  notice() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

class Observer {
  constructor(cb) {
    if (typeof cb !== 'function') {
      throw new Error('必须传入回调函数');
    }
    this.cb = cb;
  }

  update() {
    this.cb();
  }
}

const newPSubject = new Subject();
const observerA = new Observer(() => { console.log('我是观察者A，收到了事件'); });
const observerB = new Observer(() => { console.log('我是观察者B，收到了事件'); });

newPSubject.addObserver(observerA);
newPSubject.addObserver(observerB);
newPSubject.notice();
