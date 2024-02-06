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
var zigzagLevelOrder = function(root) {
    const queue = [];
    root && queue.push(root);

    const levels = [];
    let reverse = false;

    while (queue.length > 0) {
        let currentLength = queue.length;
        let currentLevel = [];

        for (let i = 0; i < currentLength; i++) {
            let node = queue.shift();
            if (reverse) {
                currentLevel.unshift(node.val);
            } else {
                currentLevel.push(node.val);
            }

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        
        levels.push(currentLevel);
        reverse = !reverse;
    }

    return levels;
};