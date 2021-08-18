// 题目
// 原有的callback调用
// fs.readFile('test.js', function(err, data) {
//     if (!err) {
//         console.log(data);
//     } else {
//         console.log(err);
//     }
// });

// promisify后
// var readFileAsync = promisify(fs.readFile);
// readFileAsync('test.js').then(data => {
//     console.log(data);
// }, err => {
//     console.log(err);
// });

// 需要注意，回调函数必须是一个nodeCallback，nodeCallback需要满足一下两点：
// 1、回调函数必须作为主函数的最后一个参数，function(data1, data2, callback)
// 2、回调函数的第一个参数必选是error，callback(error, data1, data2)

// 原来的函数在执行完自己的逻辑后，是会调用传入的callback的，给callback的第一个参数是错误，第二个参数是数据；注意原函数的使用方法是不会被该改变的
// 在改造的时候，只需要将原函数抛出的错误和数据通过promise的resolve和reject回调向外抛出即可

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
      fn.apply(null, [...args, callback]);
    });
  };
}

function noPromise(num, fn) {
  if (typeof num !== 'number') {
    fn(new Error('not number'));
  } else {
    fn(null, num + 1);
  }
}

function callbackFn(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}

noPromise(1, callbackFn);
noPromise('1', callbackFn);

const promisifyFn = promisify(noPromise);
promisifyFn(1).then((val) => { console.log(val); });
promisifyFn('1').catch((err) => { console.log(err); });
