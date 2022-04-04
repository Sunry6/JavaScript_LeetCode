/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// 解法一:BFS
var movingCount = function (m, n, k) {
  // 计算位数和
  function getNum(num) {
    let ret = 0;
    while (num) {
      ret += num % 10;
      num = Math.floor(num / 10);
    }
    return ret;
  }

  // 方向数组
  const directionArr = [
    [-1, 0], // 上
    [0, 1], // 右
    [1, 0], // 下
    [0, -1], // 左
  ];

  // 已经走过的坐标
  let set = new Set(['0, 0']);

  // 将遍历的队列坐标,题目要求从[0,0]开始
  let queue = [[0, 0]];

  // 遍历坐标中的队列
  while (queue.length) {
    // 移除队首坐标
    let [x, y] = queue.shift();
    // 遍历方向
    for (let i = 0; i < 4; i++) {
      let offsetX = x + directionArr[i][0];
      let offsetY = y + directionArr[i][1];
      // 判断临界值
      if (
        offsetX < 0 ||
        offsetX >= m ||
        offsetY < 0 ||
        offsetY >= n ||
        getNum(offsetX) + getNum(offsetY) > k ||
        set.has(`${offsetX}, ${offsetY}`)
      ) {
        continue;
      }

      // 走过的格子不计入统计
      set.add(`${offsetX}, ${offsetY}`);

      // 将四周没有走过的坐标加入队列,纳入下次的遍历
      queue.push([offsetX, offsetY]);
    }
  }

  return set.size;
};
