// 思路是：最开始的for循环中，创建limit个promise对象， 这limit个promise开始执行，哪一个
// 的状态变为resolved，立即创建新的promise，使当前正在执行的promise数量补齐为limit个
const fn = (url) => {
  // 实际场景这里用axios等请求库 发请求即可 也不用设置延时
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('完成一个任务', url, new Date());
      resolve({ url, date: new Date() });
    }, 2000);
  });
};

function limitQueue(urls, limit) {
  // 完成任务数
  let i = 0;
  const result = [];
  function run() {
    // 构造待执行任务 当该任务完成后 如果还有待完成的任务 继续执行任务
    new Promise((resolve, reject) => {
      const url = urls[i];
      i++;
      resolve(fn(url));
    }).then((res) => {
      result.push(res);
      if (i < urls.length) run();
    });
  }

  // 填充满执行队列
  for (let executeCount = 0; executeCount < limit; executeCount++) {
    run();
  }
  // 执行一个任务
}

// const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// (async (_) => {
//   await limitQueue(urls, 4);
// })();

// tiny-async-pool 库的做法，其实核心思路基本一致：最开始创建limit个promise，其中哪一个promise一旦
// 执行完成，立马再创建一个promise补充进去。不过不同的是，这个库维护了一个结果队列，最后使用
// promise.all去处理结果队列
async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = []; // 用于存放所有的promise实例
  const executing = []; // 用于存放目前正在执行的promise
  for (const item of array) {
    const p = Promise.resolve(iteratorFn(item)); // 防止回调函数返回的不是promise，使用Promise.resolve进行包裹
    ret.push(p);
    if (poolLimit <= array.length) {
      // then回调中，当这个promise状态变为fulfilled后，将其从正在执行的promise列表executing中删除
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= poolLimit) {
        // 一旦正在执行的promise列表数量等于限制数，就使用Promise.race等待某一个promise状态发生变更，
        // 状态变更后，就会执行上面then的回调，将该promise从executing中删除，
        // 然后再进入到下一次for循环，生成新的promise进行补充
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(ret);
}

const timeout = (i) => {
  console.log('开始', i);
  return new Promise((resolve) => setTimeout(() => {
    resolve(i);
    console.log('结束', i);
  }, i));
};

(
  async () => {
    const res = await asyncPool(2, [1000, 5000, 3000, 2000], timeout);
    console.log(res);
  }
)();
