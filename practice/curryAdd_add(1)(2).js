function add(...args) {
  function addFn(..._args) {
    args.push(..._args);
    return addFn;
  }

  addFn.toString = function () {
    return args.reduce((prev, next) => prev + next, 0);
  };

  return addFn;
}

console.log(+add(1)(2)(3));
