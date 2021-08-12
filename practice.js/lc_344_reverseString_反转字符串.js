// 翻转字符串，要求空间复杂度为O(1)

function reverseString(str) {
  const strArr = str.split('');
  const length = strArr.length;
  const initialDis = length - 1;
  for (let index = 0; index < Math.floor(length / 2); index++) {
    const element1 = strArr[index];
    strArr[index] = strArr[initialDis - index];
    strArr[initialDis - index] = element1;
  }
  return strArr.join('');
}

function reverseString1(str) {
  const strArr = str.split('');
  const length = strArr.length;
  for (let left = 0, right = length - 1; left <= right; left++, right--) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
  }
  return strArr.join('');
}

console.log(reverseString('qwert1yuiop'));
console.log(reverseString1('qwert1yuiop'));
