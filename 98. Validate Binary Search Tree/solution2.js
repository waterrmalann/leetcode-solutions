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
var isValidBST = function (root) {
    function valid(node, minimum, maximum) {
        if (!node) {
            return true;
        }

        if (node.val <= minimum || node.val >= maximum) {
            return false;
        }

        return valid(node.left, minimum, node.val) && valid(node.right, node.val, maximum);
    }

    return valid(root, -Infinity, Infinity);
};