/**
 * @param {string} s
 * @return {string}
 */

// 方法一:暴力遍历拼接字符串
var replaceSpace = function (s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === ' ') {
      res += '%20';
    } else {
      res += ch;
    }
  }
  return res;
};

// 方法二:转成数组
var replaceSpace = function (s) {
  let arr = s.split('');
  for (let i = 0; i < s.length; i++) {
    arr[i] = arr[i] == ' ' ? '%20' : arr[i];
  }
  return arr.join('');
};

// 方法三:拼接字符串
var replaceSpace = function (s) {
  let r = '';
  for (let i = 0; i < s.length; i++) {
    r += s[i] == ' ' ? '%20' : s[i];
  }
  return r;
};
