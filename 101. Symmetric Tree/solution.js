/** Definition for a binary tree node. */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        // an empty tree is assumed symmetrical
        return true;
    }

    function isMirror(left, right) {
        // both sides null
        if (!left && !right) return true;

        // one side null
        if (!left || !right) return false;

        // unequal values
        if (left.val !== right.val) return false;

        // recursively check for symmetry
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }

    return isMirror(root.left, root.right);
};