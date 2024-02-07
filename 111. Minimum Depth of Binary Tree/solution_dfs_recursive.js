/** Definition for a binary tree node. */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    function dfs(node) {
        if (!node) return 0;
        if (!node.left && !node.right) return 1;

        let leftDepth = dfs(node.left);
        let rightDepth = dfs(node.right);

        if (!node.left) return rightDepth + 1;
        if (!node.right) return leftDepth + 1;

        return Math.min(leftDepth, rightDepth) + 1;
    }

    return dfs(root);
};