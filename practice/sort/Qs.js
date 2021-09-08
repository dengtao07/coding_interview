function Qs(arr, i, j) {
  if (i < j) {
    let left = i;
    let right = j;
    let pivot = arr[i];
    while (i < j) {
      while (arr[j] >= pivot && i < j) {
        j--;
      }
      if (i < j) {
        arr[i++] = arr[j];
      }
      while (arr[i] <= pivot && i < j) {
        i++;
      }
      if (i < j) {
        arr[j--] = arr[i];
      }
    }
    arr[i] = pivot;
    Qs(arr, left, i - 1);
    Qs(arr, j + 1, right);
    return arr;
  }
}
let arr = [2, 10, 4, 1, 0, 9, 5, 2];
console.log(Qs(arr, 0, arr.length - 1));
