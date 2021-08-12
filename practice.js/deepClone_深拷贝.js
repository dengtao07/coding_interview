// 实现深拷贝
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  const res = obj instanceof Array ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = deepClone(obj[key]);
    }
  }
  return res;
}
const res = deepClone({ name: 'tao', hobbies: ['swimming', { coding: ['js', 'c++'] }] });
console.log(JSON.stringify(res));
