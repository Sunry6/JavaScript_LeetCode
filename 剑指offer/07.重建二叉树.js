/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// 方法一:递归遍历
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;
  if (preorder === 1) return new TreeNode(preorder[0]);

  // 先序遍历到的第一个就是根节点
  let rootVal = preoorder[0];
  // 找到根节点在中序遍历中的索引
  let index = inorder.indexOf(rootVal);

  // 先序左子树
  let preLeft = preorder.slice(1, index + 1);
  // 先序右子树
  let preRight = preorder.slice(index + 1);
  // 中序左子树
  let inLeft = inorder.slice(0, index + 1);
  // 中序右子树
  let inRight = inorder.slice(index + 1);

  // 构建二叉树
  const binaryTree = new TreeNode(rootVal);
  // 递归构建左子树
  node.left = buildTree(preLeft, inLeft);
  // 递归构建右子树
  node.right = buildTree(preRight, inRight);

  return binaryTree;
};
