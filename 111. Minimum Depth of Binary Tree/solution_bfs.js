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
    const queue = [];
    
    if (root) {
        queue.push(root);
    }
    
    let depth = 0;
    while (queue.length > 0) {
        depth++;
        const currentLength = queue.length;

        for (let i = 0; i < currentLength; i++) {
            const node = queue.shift();

            if (!node.left && !node.right) {
                return depth;
            }

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }

    return depth;
};