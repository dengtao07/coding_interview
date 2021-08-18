function removeRepeatNum(arr) {
  const hashMap = new Map();
  const noneRepeatArr = [];
  for (const item of arr) {
    if (!hashMap.has(item)) {
      hashMap.set(item, true);
      noneRepeatArr.push(item);
    } else {
      hashMap.set(item, false);
    }
  }
  return [noneRepeatArr, hashMap];
}

const [a, b] = removeRepeatNum([1, 1, 1, 222, 22, 22, 222, 3]);
console.log(a);
console.log(b);
const res = [];
b.forEach((value, key) => { if (!value) { res.push(key); } });
console.log(res);
