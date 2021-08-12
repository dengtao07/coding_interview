function sqrt(x) {
  let left = 1;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid ** 2 === x) {
      return mid;
    }
    if (mid ** 2 > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}

// console.log(sqrt(8));
// console.log(sqrt(9));
console.log(sqrt(9));
console.log(sqrt(4));
