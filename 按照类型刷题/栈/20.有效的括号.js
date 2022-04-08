/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 如果字符串个数为奇数，括号匹配无效
  if (s.length % 2 === 1) return false;

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    // 如果是左括号就入栈
    const char = s[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      // 如果是右括号就判断栈顶是否有左括号与之匹配，有就出栈，没有就表示无效
      const top = stack[stack.length - 1];
      if (
        (top === '{' && char === '}') ||
        (top === '[' && char === ']') ||
        (top === '(' && char === ')')
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  // 如果全部走完还没返回false，就判断下栈是否为空
  return stack.length === 0;
};
