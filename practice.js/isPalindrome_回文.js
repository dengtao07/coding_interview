// 判断一个数字是否是回文，回文就是正反读都一样的文字, 如：121, 1221

function isPalindrome(num) {
  const strArr = `${num}`.split('');
  const length = strArr.length;
  for (let left = 0, right = length - 1; left <= right; left++, right--) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
  }
  return `${num}` === strArr.join('');
}

console.log(isPalindrome(121));
console.log(isPalindrome(11111));
console.log(isPalindrome(122));
console.log(isPalindrome(0));
console.log(isPalindrome(-1));

function isPalindrome2(num) {
  const strArr = `${num}`.split('');
  const length = strArr.length;
  for (let left = 0, right = length - 1; left <= right; left++, right--) {
    if (strArr[left] !== strArr[right]) {
      return false;
    }
  }
  return true;
}

console.log('---------');
console.log(isPalindrome2(121));
console.log(isPalindrome2(11111));
console.log(isPalindrome2(122));
console.log(isPalindrome2(0));
console.log(isPalindrome2(-1));

// https://leetcode-cn.com/problems/palindrome-number/solution/hui-wen-shu-by-leetcode-solution/
// 思路是翻转数字的后半部分，跟前半部分进行对比
function isPalindrome3(num) {
  let originNum = num;
  let reverseNum = 0;
  while (originNum > reverseNum) {
    // 如果是回文，必须满足：刚好进行到一半的时候，前半部分===后半部分
    // 比如123321, 当 originNum = 123, reverseNum = 123时就会跳出循环
    // 比如1234321, 当 origin = 123, reverseNum = 1234时跳出循环
    // 数字位数为奇数或者偶数的情况，都可能是回文
    // 因为有以上两种情况，所以最后有两种判断条件
    reverseNum = reverseNum * 10 + (originNum % 10);
    originNum = Math.floor(originNum / 10);
  }
  return originNum === reverseNum || originNum === Math.floor(reverseNum / 10);
}

console.log('---------');
console.log(isPalindrome3(121));
console.log(isPalindrome3(11111));
console.log(isPalindrome3(122));
console.log(isPalindrome3(0));
console.log(isPalindrome3(-1));
console.log(isPalindrome3(321123));
