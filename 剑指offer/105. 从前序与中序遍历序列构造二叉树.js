/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;
  if (preorder === 1) return new TreeNode(preorder[0]);

  let rootVal = preorder[0];
  let index = inorder.indexOf(rootVal);

  let preLeft = preorder.slice(1, index + 1);
  let preRight = preorder.slice(index + 1);
  let inLeft = inorder.slice(0, index + 1);
  let inRight = inorder.slice(index + 1);

  let binaryTree = new TreeNode(rootVal);
  binaryTree.left = buildTree(preLeft, inLeft);
  binaryTree.right = buildTree(preRight, inRight);

  return binaryTree;
};
