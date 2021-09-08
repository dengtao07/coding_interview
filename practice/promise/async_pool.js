const asyncPool = require('tiny-async-pool');

const timeout = (i) => {
  console.log('开始', i);
  return new Promise((resolve) => setTimeout(() => {
    resolve(i);
    console.log('结束', i);
  }, i));
};

async function test() {
  const results = await asyncPool(2, [1000, 5000, 3000, 2000], timeout);
}

test();
