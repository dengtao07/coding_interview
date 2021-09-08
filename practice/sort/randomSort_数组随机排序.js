// 首先要弄清楚Array.sort()的原理
// Array.sort(fn)
// 如果 fn(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
// 如果 fn(a, b) 等于 0 ， a 和 b 的相对位置不变；
// 如果 fn(a, b) 大于 0 ， b 会被排列到 a 之前。

let arr = [2, 5, 10, 7, 10, 32, 90, 9, 11, 1, 0, 10];
// sort的回调是随机产生正值和负值，所以是随机排序
console.log(arr.sort(() => Math.random() - 0.5));
