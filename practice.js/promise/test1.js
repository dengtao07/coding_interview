function a() {
  return new Promise((res, rej) => {
    res(1);
    console.log('a', 1);
  });
}

function b() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(2);
      console.log('b', 2);
    }, 1000);
  });
}

function c() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(3);
      console.log('c', 3);
    }, 2000);
  });
}

a().then(() => {
  b();
  c();
}).then((val) => { console.log('完成了', val); });
