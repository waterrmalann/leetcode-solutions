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
    let previousValue = -Infinity;
    let flag = true;
    function dfs(node) {
        if (node) {
            dfs(node.left);
            if (node.val <= previousValue) {
                flag = false;
            }
            previousValue = node.val;
            dfs(node.right);
        }
    }
    dfs(root);
    return flag;
};