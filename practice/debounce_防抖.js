// 使用场景
// const fn = () => {
//     console.log(1);
// }

// const debouncedFn = debounce(fn)

// document.addEventListener('click', debouncedFn);

function debounce(fn, threshold = 200) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    const context = this;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, threshold);
  };
}

function funA(arg) {
  console.log(arg);
}
const debouncedFn = debounce(funA, 500);

let num = 0;
const timer = setInterval(() => {
  if (num > 10) {
    clearInterval(timer);
  }
  num++;
  debouncedFn('qeqwewq');
  console.log('interval 触发了');
}, 100);
