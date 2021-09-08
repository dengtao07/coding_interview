function maxNum(arr) {
  function sortFn(num1, num2) {
    num1 = `${num1}`;
    num2 = `${num2}`;
    let num1Len = num1.length;
    let num2Len = num2.length;
    let num1Index = 0;
    let num2Index = 0;

    while (1) {
      if (num1[num1Index] === num2[num2Index]) {
        num1Index++;
        num2Index++;
        // num1已遍历结束，num2未结束
        if (num1Index === num1Len && num2Index < num2Len) {
          return +num2[num2Index] - (+num1[0]);
        }
        // num2已遍历结束，num1未结束
        if (num2Index === num2Len && num1Index < num1Len) {
          return +num2[0] - (+num1[num1Index]);
        }
        // num1和num2都已遍历结束
        if (num1Index === num2Len && num2Index === num2Len) {
          return +num2[num2Index] - (+num1[num1Index]);
        }
      } else {
        return +num2[num2Index] - (+num1[num1Index]);
      }
    }
  }
  return +arr.sort(sortFn).join('');
}

const res = maxNum([0, 4, 19, 41, 70]);
const res1 = maxNum([3, 30, 34, 5, 9]);
const res2 = maxNum([2, 3]);
const res4 = maxNum([]);
const res5 = maxNum([539, 53]);
const res6 = maxNum([0, 0, 0, 0]);
const res7 = maxNum([0, 0, 0, 1]);
console.log(res);
console.log(res1);
console.log(res2);
console.log(res4);
console.log(res5);
console.log(res6);
console.log(res7);

/* -------------------------------------------------------------------- */

function maxNum1(nums) {
  function compare(a, b) {
    const res1 = `${a}${b}`;
    const res2 = `${b}${a}`;
    return res2 - res1;
  }
  return +nums.sort(compare).join('');
}

const newRes = maxNum1([0, 4, 19, 41, 70]);
const newRes1 = maxNum1([3, 30, 34, 5, 9]);
const newRes2 = maxNum1([2, 3]);
const newRes4 = maxNum1([]);
const newRes5 = maxNum1([539, 53]);
const newRes6 = maxNum1([0, 0, 0, 0]);
const newRes7 = maxNum1([0, 0, 0, 1]);

console.log('-----');
console.log(newRes);
console.log(newRes1);
console.log(newRes2);
console.log(newRes4);
console.log(newRes5);
console.log(newRes6);
console.log(newRes7);

/* -------------------------------------------------------------------- */
function maxNum2(nums) {
  function compare(a, b) {
    const res1 = `${a}${b}`;
    const res2 = `${b}${a}`;
    return res2 - res1;
  }

  function quickSort(arr, i, j, compare) {
    if (arr.length === 0) return [];
    if (i < j) {
      let left = i;
      let right = j;
      let pivot = arr[left];
      while (i < j) {
        while (compare(arr[j], pivot) >= 0 && i < j) {
          j--;
        }
        if (i < j) {
          arr[i++] = arr[j];
        }
        while (compare(arr[i], pivot) <= 0 && i < j) {
          i++;
        }
        if (i < j) {
          arr[j--] = arr[i];
        }
      }
      arr[i] = pivot;
      quickSort(arr, left, i - 1, compare);
      quickSort(arr, i + 1, right, compare);
      return arr;
    }
  }

  const newArr = quickSort(nums, 0, nums.length - 1, compare);
  return +newArr.join('');
}

const newNewRes = maxNum2([0, 4, 19, 41, 70]);
const newNewRes1 = maxNum2([3, 30, 34, 5, 9]);
const newNewRes2 = maxNum2([2, 3]);
const newNewRes4 = maxNum2([]);
const newNewRes5 = maxNum2([539, 53]);
const newNewRes6 = maxNum2([0, 0, 0, 0]);
const newNewRes7 = maxNum2([0, 0, 0, 1]);

console.log('-----');
console.log(newNewRes);
console.log(newNewRes1);
console.log(newNewRes2);
console.log(newNewRes4);
console.log(newNewRes5);
console.log(newNewRes6);
console.log(newNewRes7);
