/** Definition for a binary tree node. */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const queue = [];
    root && queue.push(root);

    const levels = [];
    while (queue.length > 0) {
        const currentLength = queue.length;
        const currentLevel = [];

        for (let i = 0; i < currentLength; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        levels.push(currentLevel);
    }

    return levels;
};