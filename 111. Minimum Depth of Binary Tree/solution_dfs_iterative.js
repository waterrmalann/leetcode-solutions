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
    if (!root) return 0;
    
    const stack = [[root, 1]]; // [node, depth]
    let minimumDepth = Infinity;

    while (stack.length > 0) {
        const [node, depth] = stack.pop();

        if (node) {
            if (!node.left && !node.right) {
                minimumDepth = Math.min(minimumDepth, depth);
                continue;
            }

            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
        }
    }

    return minimumDepth;
};