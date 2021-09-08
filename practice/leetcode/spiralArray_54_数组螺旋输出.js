const spiralOrder = function (matrix) {
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let down = matrix.length - 1;
  let arr = [];

  while (true) {
    for (let i = left; i <= right; ++i) {
      arr.push(matrix[top][i]);
    }
    top++;
    if (top > down) break;
    for (let i = top; i <= down; ++i) {
      arr.push(matrix[i][right]);
    }
    right--;
    if (left > right) break;
    for (let i = right; i >= left; --i) {
      arr.push(matrix[down][i]);
    }
    down--;
    if (top > down) break;
    for (let i = down; i >= top; --i) {
      arr.push(matrix[i][left]);
    }
    left++;
    if (left > right) break;
  }
  return arr;
};
