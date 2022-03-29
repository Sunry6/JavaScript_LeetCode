/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

// 解法一:遍历链表
var reversePrint = function (head) {
  let nodes = [];
  while (head !== null) {
    nodes.unshift(head.val);
    head = head.next;
  }
  return nodes;
};

// 解法二:模拟两个栈,一个入栈,一个出栈
var reversePrint = function (head) {
  let nodes = [];
  while (head != null) {
    nodes.push(head.val);
    head = head.next;
  }

  let result = [];
  let temp = nodes.pop();
  while (temp != null) {
    result.push(temp);
    temp = nodes.pop();
  }

  return result;
};

// 解法三:模拟栈递归后序遍历
var reversePrint = function (head) {
  let nodes = [];
  const visitor = function (head) {
    if (head != null) {
      visitor(head.next);
      nodes.push(head.val);
    }
  };
  visitor(head);
  return nodes;
};

var reversePrint = function (head) {
  let nodes = [];
  const dfs = function (head) {
    if (head == null) return;
    dfs(head.next);
    nodes.push(head.val);
  };
  dfs(head);
  return nodes;
};
