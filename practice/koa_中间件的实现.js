function compose(middlewareList) {
  return function (ctx) {
    function dispatch(i) {
      const fn = middlewareList[i];
      try {
        return Promise.resolve(
          fn(ctx, dispatch.bind(null, i + 1)), // promise
        );
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return dispatch(0);
  };
}

class Koa {
  constructor() {
    this.middlewareList = [];
    this.dispatch = () => {};
  }

  use(middleware) {
    this.middlewareList.push(middleware);
    return this;
  }

  composeMiddlewares() {
    const fn = compose(this.middlewareList);
    this.dispatch = fn;
  }
}

const app = new Koa();
app.use(async (ctx, next) => {
  console.log(1);
  next();
  console.log(2);
});

app.use(async (ctx, next) => {
  console.log(3);
  console.log(4);
});
app.composeMiddlewares();
console.log(app);
app.dispatch({ req: {}, res: {} });
