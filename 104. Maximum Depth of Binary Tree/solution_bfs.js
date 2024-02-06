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
var maxDepth = function (root) {
    const queue = [];
    if (root) {
        queue.push(root);
    }
    
    let levels = 0;

    while (queue.length > 0) {
        levels++;
        const currentLength = queue.length;

        for (let i = 0; i < currentLength; i++) {
            const node = queue.shift();

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }

    return levels;
};