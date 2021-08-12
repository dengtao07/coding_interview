// // 使用场景
// fn;
// const newFn = throttle(fn);
// document.addEventListener('click', newFn);

function throttle(fn, threshold = 200) {
  let startTime = new Date();
  let timer = null;
  return function (...args) {
    const context = this;
    const curTime = new Date();
    clearTimeout(timer);
    if (curTime - startTime >= threshold) {
      fn.apply(context, args);
      startTime = curTime; // 不要忘记更新开始时间
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, threshold);
    }
  };
}

const throttledFn = throttle(() => {
  console.log(1);
}, 1000);

setInterval(throttledFn, 50);
