/* ----------------------------------------- 翻转链表 ----------------------------------------- */
// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// function reverseList(list) {
//   let cur = list;
//   let prev = null;
//   while (cur) {
//     const next = cur.next;
//     cur.next = prev;
//     prev = cur;
//     cur = next;
//   }
//   return prev;
// }

// function reverseListIteration(list) {
//   let head = list;
//   if (head === null || head.next === null) {
//     return head;
//   }
//   let newHead = reverseListIteration(head.next);
//   head.next.next = head;
//   head.next = null;
//   return newHead;
// }

// const list1 = new ListNode(1);
// const list2 = new ListNode(2);
// const list3 = new ListNode(3);
// list2.next = list3;
// list1.next = list2;

// console.log(list1);
// console.log(reverseList(JSON.parse(JSON.stringify(list1))));
// console.log(list1);
// console.log(reverseListIteration(JSON.parse(JSON.stringify(list1))));

/* ----------------------------------------- 删除链表节点 ----------------------------------------- */
// 1->2->3->null

// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// const list1 = new ListNode(1);
// const list2 = new ListNode(2);
// const list3 = new ListNode(3);
// list2.next = list3;
// list1.next = list2;

// function deleteNode(list, value) {
//   let cur = list;
//   if (cur.value === value) {
//     return cur.next;
//   }
//   while (cur) {
//     const next = cur.next;
//     if (next && next.value === value) {
//       cur.next = next.next;
//       return list;
//     }
//     cur = next;
//   }
//   return list;
// }

// console.log(list1);
// console.log(deleteNode(list1, 2));

/* ----------------------------------------- 链表有环 ----------------------------------------- */

// 1->2->3->4->2

// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// const list1 = new ListNode(1);
// const list2 = new ListNode(2);
// const list3 = new ListNode(3);
// const list4 = new ListNode(4);
// list3.next = list4;
// list2.next = list3;
// list1.next = list2;
// list4.next = list2;

// function findCircleInList(list) {
//   let fast = list;
//   let slow = list;
//   while (fast) {
//     if (!fast.next) {
//       return false;
//     }
//     fast = fast.next.next;
//     slow = slow.next;
//     if (fast.value === slow.value) {
//       return true;
//     }
//   }
//   return false;
// }

// function findCircleInListHashMap(list) {
//   const hashMap = new Map();
//   let cur = list;
//   while (cur) {
//     if (hashMap.has(cur.value)) {
//       return true;
//     }
//     hashMap.set(cur.value, true);
//     cur = cur.next;
//   }
//   return false;
// }

// console.log(findCircleInList(list1));
// console.log(findCircleInListHashMap(list1));

/* ----------------------------------------- 判断括号是否有效 ----------------------------------------- */

// function isBracketValid(str) {
//   const strArr = str.split('');
//   const stack = [];
//   function isValid(bracket) {
//     if (stack[stack.length - 1] === bracket) {
//       stack.pop();
//       return true;
//     }
//     return false;
//   }

//   for (const char of strArr) {
//     switch (char) {
//       case '{':
//       case '(':
//       case '[':
//         stack.push(char);
//         break;
//       case '}':
//         if (!isValid('{')) return false;
//         break;
//       case ')':
//         if (!isValid('(')) return false;
//         break;
//       case ']':
//         if (!isValid('[')) return false;
//         break;
//       default:
//         break;
//     }
//   }
//   return stack.length === 0;
// }

// console.log(isBracketValid('[{{(}}]'));
// console.log(isBracketValid('[{}]'));
// console.log(isBracketValid('}'));

/* ----------------------------------------- 两数之和 ----------------------------------------- */
// function findTwoNum(arr, sum) {
//   const hashMap = new Map();
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (hashMap.has(sum - element)) {
//       return [hashMap.get(sum - element), index];
//     }
//     hashMap.set(element, index);
//   }
//   return [];
// }

/* ----------------------------------------- 实现一个trim方法 ----------------------------------------- */
// String.prototype.trimFn = function () {
//   const reg = /^\s+|\s+$/;
//   return this.replace(reg, '');
// };

// console.log('    sd   ad     '.trimFn());

/* ----------------------------------------- 实现深拷贝方法 ----------------------------------------- */

// function deepClone(obj) {
//   if (typeof obj !== 'object' || obj === null) {
//     return obj;
//   }
//   let result = Array.isArray(obj) ? [] : {};
//   for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//       const element = obj[key];
//       result[key] = deepClone(element);
//     }
//   }
//   return result;
// }

// const arr = [1, 2, 3, 4, [2, 3], { name: 'deng', hobbies: ['s', 'l'] }];
// console.log(deepClone(arr));

/* ----------------------------------------- 函数柯里化 ----------------------------------------- */
// add(a,b) => a+b
// addfn = curry(add)
// addgn(1)(2)()

// function curryFn(fn) {
//   const params = [];
//   function curry(...args) {
//     params.push(...args);
//     return curry;
//   }

//   curry.toString = function () {
//     return fn(...params);
//   };

//   return curry;
// }

// function add(...args) {
//   return args.reduce((prev, cur) => {
//     return prev + cur;
//   }, 0);
// }

// const addCurry = curryFn(add);
// console.log(+addCurry(1)(2)(2, 2, 2));

/* ----------------------------------------- node promisify函数 ----------------------------------------- */
// promisify函数
// function fn(p1, p2, p3, ..., callback) {}
// callback(err, data) {}
// function promisify(fn) { return newFn }
// newFn().then(callback)

// function promisify(fn) {
//   function promisifyFn(...args) {
//     return new Promise((resolve, reject) => {
//       function cb(err, data) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       }
//       fn.apply(null, [...args, cb]);
//     });
//   }
//   return promisifyFn;
// }

// function isNum(num, fn) {
//   if (typeof num !== 'number') {
//     fn(new Error('not number'));
//   } else {
//     fn(null, num);
//   }
// }

// function callback(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('结果为：', data);
//   }
// }

// isNum(1, callback);
// isNum('1', callback);
// const promisifyIsNum = promisify(isNum);
// promisifyIsNum(1).then((data) => console.log('结果为：', data), (err) => console.log(err));
// promisifyIsNum('1').then((data) => console.log('结果为：', data), (err) => console.log(err));

/* ----------------------------------------- 大数相加 ----------------------------------------- */
// function bigNumAdd(num1, num2) {
//   const maxLength = Math.max(num1.length, num2.length);
//   num1 = num1.padStart(maxLength, 0);
//   num2 = num2.padStart(maxLength, 0);
//   console.log(num1);
//   console.log(num2);
//   let count = maxLength - 1;
//   let carry = 0;
//   let res = '';
//   while (count > -1) {
//     console.log(num1[count]);
//     let sum = +num1[count] + (+num2[count]) + carry;
//     carry = Math.floor(sum / 10);
//     let cur = sum % 10;
//     res = `${cur}${res}`;
//     count--;
//   }
//   if (carry > 0) {
//     res = `${carry}${res}`;
//   }
//   return res;
// }

// const a = '8989778977977979';
// const b = '13123545345346457677';
// console.log(bigNumAdd(a, b));

/* ----------------------------------------- 拍平数组 ----------------------------------------- */
// // 递归
// function arrFlatten(arr) {
//   let result = [];
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(arrFlatten(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }

// // 递归+reduce
// function arrFlattenReduce(arr) {
//   return arr.reduce((prev, cur) => {
//     arr = prev.concat(Array.isArray(cur) ? arrFlattenReduce(cur) : cur);
//     return arr;
//   }, []);
// }

// // 迭代
// function arrFlattenIteration(arr) {
//   while (arr.some((item) => Array.isArray(item))) {
//     arr = [].concat(...arr);
//   }
//   return arr;
// }

// // 栈
// function arrFlattenStack(arr) {
//   let result = [];
//   let stack = [...arr];
//   while (stack.length) {
//     const cur = stack.pop();
//     if (!Array.isArray(cur)) {
//       result.unshift(cur);
//     } else {
//       stack.push(...cur);
//     }
//   }
//   return result;
// }

// const a = [1, 2, [3, [4, [5, 6, 7]]]];
// console.log(arrFlatten(a));
// console.log(arrFlattenIteration(a));
// console.log(arrFlattenReduce(a));
// console.log(arrFlattenStack(a));

/* ----------------------------------------- 防抖 ----------------------------------------- */
// function debounce(fn, threshold) {
//   let timer = null;
//   return function (...args) {
//     clearTimeout(timer);
//     const context = this;
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, threshold);
//   };
// }

// function log() {
//   console.log('1');
// }

// const debouncedLog = debounce(log, 1000);

// let intervalTimer = null;
// let count = 0;
// intervalTimer = setInterval(() => {
//   debouncedLog();
//   // log();
//   count++;
//   if (count > 10) {
//     clearInterval(intervalTimer);
//   }
// }, 100);

/* ----------------------------------------- 节流 ----------------------------------------- */
// function throttle(fn, threshold) {
//   let startTime = Date.now();
//   let timer = null;
//   return function (...args) {
//     clearTimeout(timer);
//     let curTime = Date.now();
//     const context = this;
//     if (curTime - startTime >= threshold) {
//       fn.apply(context, args);
//       startTime = curTime;
//     } else {
//       timer = setTimeout(() => {
//         fn.apply(context, args);
//       }, threshold);
//     }
//   };
// }

// function log() {
//   console.log(1);
// }

// const debouncedLog = throttle(log, 1000);
// setInterval(() => {
//   debouncedLog();
//   // log();
// }, 100);

/* ----------------------------------------- 反转字符串 ----------------------------------------- */

// function reverseString(str) {
//   const strArr = str.split('');
//   const length = strArr.length;
//   for (let index = 0; index <= Math.floor(length / 2); index++) {
//     [strArr[index], strArr[length - index]] = [strArr[length - index], strArr[index]];
//   }
//   return strArr.join('');
// }

// console.log(reverseString('1234567'));

/* ----------------------------------------- 数组去重 ----------------------------------------- */
// function removeRepeatItem(arr) {
//   const hashMap = new Map();
//   for (const item of arr) {
//     hashMap.set(item, hashMap.has(item));
//   }
//   const repeatRes = [];
//   for (const [key, value] of hashMap.entries()) {
//     if (value) {
//       repeatRes.push(key);
//     }
//   }
//   return repeatRes;
// }

// const arr1 = [1, 2, 2, 2, 2, 3, 4, 4];
// console.log(removeRepeatItem(arr1));

/* ----------------------------------------- 千位分隔符 ----------------------------------------- */
// 123456789 => 123,456,789

// function splitNumByThousands(str) {
//   const reg = /(\d)(?=(\d{3})+$)/g;
//   return str.replace(reg, '$1,');
// }

// function splitNumByThousands1(num) {
//   // return Number.toLocaleString.call(str, 'en-US');
//   return num.toLocaleString('en-US');
// }

// console.log(splitNumByThousands('123456789'));
// console.log(splitNumByThousands1(123456789));

/* ----------------------------------------- 判断回文 ----------------------------------------- */
// function isPalindrome(str) {
//   const strArr = str.split('');
//   const length = strArr.length;
//   for (let left = 0, right = length - 1; left <= right; left++, right--) {
//     if (strArr[left] !== strArr[right]) {
//       return false;
//     }
//   }
//   return true;
// }

// function isPalindrome1(num) {
//   let reverseNum = 0;
//   while (num > reverseNum) {
//     reverseNum = reverseNum * 10 + num % 10;
//     num = Math.floor(num / 10);
//   }
//   return reverseNum === num || Math.floor(reverseNum / 10) === num;
// }

// console.log(isPalindrome('123321'));
// console.log(isPalindrome('123311'));
// console.log(isPalindrome1(123312));
// console.log(isPalindrome1(123321));

/* ----------------------------------------- 素数 ----------------------------------------- */
// // 素数：除了1和自身，不能被别的整数整除，1既不是素数也不是合数
// function isPrimeNumber(num) {
//   for (let index = 2; index <= Math.sqrt(num); index++) {
//     if (num % index === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrimeNumber(13));

/* ----------------------------------------- forEach ----------------------------------------- */
// Array.prototype.forEachFn = function (cb, context) {
//   for (let index = 0; index < this.length; index++) {
//     const element = this[index];
//     cb.call(context || null, element, index, this);
//   }
// };

// const arr = [1, 2, 3, 4];
// arr.forEachFn(function (item, index, array) {
//   console.log(item, index, array, this, '\n');
// }, [5, 6, 7, 8]);

/* ----------------------------------------- filter ----------------------------------------- */
// Array.prototype.filterFn = function (cb, context) {
//   const result = [];
//   for (let index = 0; index < this.length; index++) {
//     const element = this[index];
//     if (cb.call(context, element, index, this)) {
//       result.push(element);
//     }
//   }
//   return result;
// };

// const arr = [1, 2, 3, 4];
// console.log(arr.filterFn((item, index) => {
//   return item > 2;
// }));

/* ----------------------------------------- map ----------------------------------------- */

// Array.prototype.mapFn = function (cb, context) {
//   const length = this.length;
//   const result = [];
//   for (let index = 0; index < length; index++) {
//     const element = this[index];
//     result.push(cb.call(context, element, index, this));
//   }
//   return result;
// };

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.mapFn((item) => { return item + 1; }));

/* ----------------------------------------- call ----------------------------------------- */
// fn.call(context, p1, p2, p3)
// Function.prototype.callFn = function (context, ...args) {
//   let fn = this;
//   if (context == null) {
//     context = window;
//   }
//   const newFn = Symbol('newFn');
//   context[newFn] = fn;
//   let res = context[newFn](...args);
//   delete context[newFn];
//   return res;
// };

// // let map = Array.prototype.map;
// // const res = map.callFn('123', (item) => { return item; });
// // console.log(res);

// const p1 = {
//   name: 'tao',
//   sayName() {
//     console.log(this.name);
//   },
// };

// const p2 = {
//   name: 'min',
// };

// p1.sayName.callFn(p2);

/* ----------------------------------------- bind ----------------------------------------- */
// const newFn = fn.bind(context, ...args);
// newFn(...args1);
// Function.prototype.bindFn = function (context, ...args) {
//   const fn = this;
//   if (typeof fn !== 'function') {
//     return new Error('this is not callable');
//   }
//   context = context || window;
//   return function (...params) {
//     fn.call(context, ...args, ...params);
//   };
// };

// Function.prototype.bindFn1 = function (context, ...args) {
//   const fn = this;
//   if (typeof fn !== 'function') {
//     return new Error('this is not callable');
//   }
//   context = context || window;
//   const tempFn = Symbol('temFn');
//   context[tempFn] = fn;
//   return function (...params) {
//     context[tempFn](...args, ...params);
//   };
// };

// const p1 = {
//   name: 'tao',
//   sayName(...args) {
//     console.log(this.name, args);
//   },
// };

// const p2 = {
//   name: 'min',
// };

// // const sayName = p1.sayName.bindFn(p2, 'ttttttt');
// // sayName('aaaaa');
// // const sayName1 = p1.sayName.bindFn1(p2, 'ttttttt');
// // sayName1('aaaaa');
// // sayName1('1111');
// // console.log(p2);

// const sayName = p1.sayName.bind(p2, 'ttttttt');
// sayName('aaaaa');
// console.log(p2);

/* ----------------------------------------- 实现自定义的setInterval ----------------------------------------- */

// 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间执行fn，然后写一个 myClear，停止上面的 mySetInterVal

// function mySetInterVal(fn, a, b) {
//   let timer = {
//     tag: 0,
//   };
//   let n = 0;
//   function execute() {
//     timer.tag = setTimeout(() => {
//       console.log('now time', `${a} + ${n}*${b}`, a + n * b);
//       fn();
//       n++;
//       execute();
//     }, a + n * b);
//   }
//   execute();
//   return timer;
// }

// function myClear(timer) {
//   clearTimeout(timer);
// }

// const timer = mySetInterVal(() => { console.log(1); }, 100, 100);
// setTimeout(() => {
//   console.log('timer.tag is', timer.tag);
//   myClear(timer.tag);
// }, 10000);

/* ----------------------------------------- 实现观察者模式 ----------------------------------------- */
// 观察者模式和发布订阅模式其实都是订阅事件、执行回调的模式，观察者模式是被观察对象与观察者强耦合，被观察需要维护观察者队列，事件的通知也是被观察者发发出
// class Observer {
//   constructor(name) {
//     this.name = name;
//   }

//   update(...param) {
//     console.log(`I am ${this.name}, I received ${param}`);
//   }
// }

// class Subject {
//   constructor(observers) {
//     this.observerList = [...observers];
//   }

//   addObserver(observer) {
//     this.observerList.push(observer);
//   }

//   removeObserver(observer) {
//     this.observerList = this.observerList.filter((item) => item !== observer);
//   }

//   clearObserver() {
//     this.observerList = [];
//   }

//   notice(param) {
//     this.observerList.forEach((observer, index) => observer.update(index, param));
//   }
// }

// const observer1 = new Observer('1');
// const observer2 = new Observer('2');
// const subject = new Subject([observer1, observer2]);
// subject.notice('notice');

/* ----------------------------------------- 实现发布订阅模式 ----------------------------------------- */
// 发布订阅模式与观察者模式的区别是：发布订阅模式中，发布者与订阅者之间是解耦的，二者通过事件中心进行通信，订阅者队列的维护，事件的发布都由事件中心控制
// 另外发布订阅模式不同的是：并没有发布者和订阅者的，取而代之的是事件与事件回调函数，发布订阅模式其实管理的是事件与其回调函数队列
class EventBus {
  constructor() {
    this.handlers = {}; // { event1: [handler1, handler2], event2: [handler1, handler2]}
  }

  isOwnProperty(eventName) {
    return Object.prototype.hasOwnProperty.call(this.handlers, eventName);
  }

  on(eventName, handler) {
    if (!this.isOwnProperty(eventName)) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(handler);
  }

  remove(eventName, handler) {
    if (this.isOwnProperty(eventName)) {
      this.handlers[eventName] = this.handlers[eventName].filter((item) => item !== handler);
    } else {
      console.log(`can not find handler for ${eventName}`);
    }
  }

  emit(eventName, ...args) {
    if (this.isOwnProperty(eventName)) {
      this.handlers[eventName].forEach((handler) => {
        handler(...args);
      });
    } else {
      console.log(`can not find event ${eventName}`);
    }
  }

  removeAll(eventName) {
    if (this.isOwnProperty(eventName)) {
      delete this.handlers[eventName];
    } else {
      console.log(`can not find event ${eventName}`);
    }
  }

  once(eventName, handler) {
    const wrapper = (...args) => {
      handler(...args);
      this.remove(eventName, wrapper);
    };
    if (this.isOwnProperty(eventName)) {
      this.handlers[eventName].push(wrapper);
    } else {
      console.log(`can not find event ${eventName}`);
    }
  }
}

const eventBus = new EventBus();
const cb1 = () => console.log(111);
eventBus.on('click', cb1);
eventBus.on('click', () => console.log(222));
eventBus.once('click', () => console.log(333));
eventBus.emit('click');
eventBus.remove('click', cb1);
eventBus.emit('click');
eventBus.emit('keydown');
