import Binary, { TreeNode } from '../utils/binary-tree';

function isBalanced(root) {
  function depth(node) {
    if (!node) return 0;
    const left = depth(node.left);
    const right = depth(node.right);
    return Math.max(left, right) + 1;
  }
  if (!root) return true;
  if (Math.abs(depth(root.left) - depth(root.right)) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
}

function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return null;
  }
  const m = Math.floor((nums.length - 1) / 2);
  const p = new TreeNode(nums[m]);
  p.left = sortedArrayToBST(nums.slice(0, m));
  p.right = sortedArrayToBST(nums.slice(m + 1));
  return p;
}

const arr = [1, 2, 5, 3, 9, 3, 1];
const b = new Binary();
arr.forEach((v) => {
  b.insert(v);
});

const b2 = sortedArrayToBST(arr);

console.log(b, isBalanced(b.root));
console.log(b2, isBalanced(b2.root));
