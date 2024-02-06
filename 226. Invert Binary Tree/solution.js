/** Definition for a binary tree node. */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return null;
    }

    let leftSubtree = invertTree(root.left);
    let rightSubtree = invertTree(root.right);
    
    root.left = rightSubtree;
    root.right = leftSubtree;

    return root;
}