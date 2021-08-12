// 核心点：第一个出现反括号的，他的上一个符号必须是相匹配的括号才可能是有效的

function bracketValid(str) {
  const strArr = str.split('');
  const stack = [];
  function checkValid(pairBracket) {
    if (stack[stack.length - 1] === pairBracket) {
      stack.pop();
      return true;
    }
    return false;
  }

  for (const char of strArr) {
    switch (char) {
      case '{':
      case '[':
      case '(':
        stack.push(char);
        break;
      case '}':
        if (!checkValid('{')) return false;
        break;
      case ']':
        if (!checkValid('[')) return false;
        break;
      case ')':
        if (!checkValid('(')) return false;
        break;
      default:
        break;
    }
  }
  return true;
}

const str = '[{({})}]';
console.log(bracketValid(str));

console.log(bracketValid('{[)]}'));
console.log(bracketValid(')'));
