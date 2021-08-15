// 题目，实现redux的applyMiddleware功能
// redux的中间件实际上就是对Store的dispatch方法进行改造，执行每个中间件重定义的功能

// 思路：有点像套娃，每个中间件都会接受一个next属性，next属性就是上一个中间件中的dispatch方法，
// 而每个中间件返回的也都是新的next方法（或者说dispatch方法）。那么每个中间件干的事情其实就是：
// 接收上一个中间件的next方法，增加自己的逻辑形成新的next方法，提供给下一个中间件，就像套娃一样，
// 一层层嵌套下去，而最里层的中间件调用的就是Store本身定义的dispatch方法

// 用到的技术：1、函数柯里化curry； 2、函数组合compose

// https:// juejin.cn/user/4089838986602078

// 普通写法
const Store = {
  state: {
    count: 0,
  },
  dispatch(action) {
    console.log('执行了真正的dispatch');
    Store.state.count = action.payload;
  },
};

function applyMiddleware(store, middlewares) {
  middlewares.reverse();
  middlewares.forEach((middleware) => {
    store.dispatch = middleware(store)(store.dispatch);
  });
  // 相当于 date(store, store.dispatch, log(store)(store.dispatch))
}

const date = (store) => (next) => (action) => {
  console.log('start time: ', Date.now());
  next(action);
  console.log('end time: ', Date.now());
};

const log = (store) => (next) => (action) => {
  console.log('dispatching, action is:', action);
  console.log('old state: ', store.state);
  next(action);
  console.log('new state: ', store.state);
};

// applyMiddleware(Store, [date, log]);

// Store.dispatch({
//   type: 'change count',
//   payload: 1,
// });

// 使用compose函数改造下
function compose(...funcs) {
  if (funcs.length === 0) {
    return (...args) => args;
  } if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((prev, cur) => (...args) => prev(cur(...args)));
}

function applyMiddlewareCompose(store, middlewares) {
  middlewares.reverse();
  const middlewareChain = middlewares.map((middleware) => middleware(store));
  store.dispatch = compose(...middlewareChain)(store.dispatch);
}

applyMiddlewareCompose(Store, [log, date]);

Store.dispatch({
  type: 'change count',
  payload: 1,
});
