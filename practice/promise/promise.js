// const p1 = new Promise((res, rej) => {})

const statusType = { PENDING: 'PENDING', FULFILLED: 'FULFILLED', REJECTED: 'REJECTED' };

class CPromise {
  constructor(cb) {
    this.status = statusType.PENDING;
    this.value = null;
    this.error = null;
    this.onResolveCallback = [];
    this.onRejectCallback = [];

    let resolve = (value) => {
      if (this.status === statusType.PENDING) {
        this.status = statusType.FULFILLED;
        this.value = value;
        this.onResolveCallback.forEach((resolveCb) => {
          resolveCb(this.value);
        });
      }
    };

    let reject = (err) => {
      if (this.status === statusType.PENDING) {
        this.status = statusType.REJECTED;
        this.error = new Error(err);
        this.onRejectCallback.forEach((rejectCb) => {
          rejectCb(this.error);
        });
      }
    };

    try {
      cb(resolve, reject);
    } catch (error) {
      console.log('错误');
    }
  }

  then(resolve, reject) {
    if (this.status === statusType.FULFILLED) {
      resolve(this.value);
    } else if (this.status === statusType.REJECTED) {
      reject(this.error);
    } else {
      this.onResolveCallback.push(resolve);
      this.onRejectCallback.push(reject);
    }
  }

  catch(reject) {
    if (this.status === statusType.REJECTED) {
      reject(this.error);
    } else if (this.status === statusType.PENDING) {
      this.onRejectCallback.push(reject);
    }
  }

  finally(callback) {}

  static resolve(p) {}

  static reject(p) {}

  // static all(p) {}

  // static allSettled(p) {}

  // static race(p) {}

  // static any(p) {}
}

// const p1 = new CPromise((res, rej) => { res(111); });
// p1.then((val) => { console.log(val); });

// const p2 = new CPromise((res, rej) => { rej(111); });
// p2.then((val) => { console.log(val); }, (err) => { console.log(err); });
// p2.catch((err) => { console.log(err); });

const p3 = new CPromise((res, rej) => {
  setTimeout(() => {
    res('延迟一秒后返回');
  }, 1000);
}).then((val) => { console.log(val); });

const p4 = new CPromise((res, rej) => {
  setTimeout(() => {
    rej('延迟一秒后报错');
  }, 1000);
}).catch((err) => { console.log(err); });
