// 输入不仅仅只有Array
function promiseAll(args) {
  return new Promise((resolve, reject) => {
    const promiseResults = [];
    let iteratorIndex = 0;
    // 已完成的数量，用于最终的返回，不能直接用完成数量作为iteratorIndex
    // 输出顺序和完成顺序是两码事
    let fullCount = 0;
    // 用于迭代iterator数据
    for (const item of args) {
      // for of 遍历顺序，用于返回正确顺序的结果
      // 因iterator用forEach遍历后的key和value一样，所以必须存一份for of的 iteratorIndex
      let resultIndex = iteratorIndex;
      iteratorIndex += 1;
      // 包一层，以兼容非promise的情况
      Promise.resolve(item).then((res) => {
        promiseResults[resultIndex] = res;
        fullCount += 1;
        // Iterator 接口的数据无法单纯的用length和size判断长度，不能局限于Array和 Map类型中
        if (fullCount === iteratorIndex) {
          resolve(promiseResults);
        }
      }).catch((err) => {
        reject(err);
      });
    }
    // 处理空 iterator 的情况
    if (iteratorIndex === 0) {
      resolve(promiseResults);
    }
  });
}

Promise.all = function (arrP) {
  let list = [];
  let len = 0;
  let hasErr = false;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arrP.length; i++) {
      arrP[i].then((data) => {
        list[i] = data;
        len++;
        len === arrP.length && resolve(list);
      }, (error) => {
        !hasErr && reject(error);
        hasErr = true;
      });
    }
  });
};

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);
const p3 = Promise.reject(new Error(3));

const result = Promise.all([p1, p2, p3]);
result.then((val) => { console.log(val); });
