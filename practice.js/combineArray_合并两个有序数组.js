// https://github.com/lgwebdream/FE-Interview/issues/8
// [1, 1, 2, 10]   [0, 2, 5]
function combineSortedArrays(arr1, arr2) {
  const length1 = arr1.length;
  const length2 = arr2.length;
  const sortedArr = new Array(length1 + length2).fill(0);
  let p1 = 0;
  let p2 = 0;
  let curNum;
  while (p1 < length1 || p2 < length2) {
    if (p1 === length1) {
      curNum = arr2[p2++];
    } else if (p2 === length2) {
      curNum = arr1[p1++];
    } else if (arr1[p1] < arr2[p2]) {
      curNum = arr1[p1++];
    } else {
      curNum = arr2[p2++];
    }
    sortedArr[p1 + p2 - 1] = curNum;
  }
  return sortedArr;
}

// 思路，始终对比两个数组的第一位，将小的数放入结果数组中，直到某一个数组没有值了
// 仍然有值的数组中的所有值一定是大于已排好序的值，直接concat就行
function combineSortedArrays1(arr1, arr2) {
  const result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr1).concat(arr2);
}

// 排序二维数组，思路是每次都shift出来两个数组，排序好后再push进去，
// 每次一循环都会将两个数组合并为一个，直到原数组中只有一个数组，就是结果了
function sortArray(arr) {
  while (arr.length > 1) {
    const arr1 = arr.shift();
    const arr2 = arr.shift();
    const res = combineSortedArrays1(arr1, arr2);
    arr.push(res);
  }
  return arr[0];
}

const a = [1, 1, 2, 10];
const b = [0, 2, 5];

console.log(combineSortedArrays(a, b));

const arr1 = [[0, 1, 2, 3], [4, 5, 6], [7, 8, 9, 1111], [1, 2, 3], [4, 5, 6, 10, 11]];
console.log(sortArray(arr1));
