// 先各位全部填充a，保证位数，再从最后一位向前推：

// 第一步：先定义一个长度为n的数组，给每一位上都填充上字符a；
// 第二步：k - n 就是每一位都是a的时候还差多少；
// 第三步：从最后一位（即n-1）开始，从后往前来分余下的k - n；

// https://leetcode-cn.com/problems/smallest-string-with-a-given-numeric-value/solution/ju-you-gei-ding-shu-zhi-de-zui-xiao-zi-f-6cdq/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getSmallestString = function (n, k) {
  // k - n 每一位都是a的时候还差多少;i是下一个要进行填充的位
  let res = Array(n).fill('a'); let remain = k - n; let
    i = n - 1;
  while (remain) {
    if (remain > 25) { // 当前位无法填充完
      remain -= 25;
      res[i] = 'z';
      i--;
    } else { // 当前位可以填充完剩余的值
      res[i] = String.fromCharCode(97 + remain);
      remain = 0;
    }
  }
  return res.join('');
};
