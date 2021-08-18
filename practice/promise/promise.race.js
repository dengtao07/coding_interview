// https://zhuanlan.zhihu.com/p/196671665
// https://zhuanlan.zhihu.com/p/362648760

Promise.raceFn = function (arrP) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arrP.length; i++) {
      Promise.resolve(arrP[i]).then((data) => {
        resolve(data);
      }).catch((err) => { reject(err); });
    }
  });
};

const getPList = () => {
  let arrP = [];
  for (let i = 0; i < 10; i++) {
    arrP[i] = new Promise((resolve, reject) => {
      let [v, t] = [Math.random(), Math.random() * 1000];
      setTimeout(() => {
        v > 0.5 ? resolve(v) : reject(v);
      }, t);
    });
  }
  return arrP;
};

Promise.raceFn(getPList()).then(
  (data) => console.log('promise.race 测试:', data),
  (err) => console.error(`promise.race 测试，错误:${err}`),
);
