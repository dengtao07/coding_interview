// 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间执行fn，然后写一个 myClear，停止上面的 mySetInterVal
// 题目来源：https://github.com/lgwebdream/FE-Interview/issues/7
// 思路就是内部写一个函数去包裹setTimeout，当setTimeout的回调执行完之后，再递归调用自己

function myInterVal(fn, a, b) {
  let n = 0;
  let tag = {
    timer: 0, // 这里需要注意，需要使用一个对象去记录timer，因为用数值的话是值的拷贝，return出去那一瞬间已经固了，后续是不会再改变的
  };
  function interval() {
    tag.timer = setTimeout(() => {
      fn();
      console.log(`延时为：${a + n * b}`);
      n++;
      interval();
    }, a + n * b);
  }
  interval();
  return tag;
}

function clearInterval(timer) {
  clearTimeout(timer);
}

const tag = myInterVal(() => { console.log('我被执行了'); }, 200, 200);
setTimeout(() => { clearInterval(tag.timer); }, 10000);
