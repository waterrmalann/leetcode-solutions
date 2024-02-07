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
    
    const stack = [[root, 1]]; // [node, depth]
    let maximumDepth = 0;

    while (stack.length > 0) {
        const [node, depth] = stack.pop();

        if (node) {
            maximumDepth = Math.max(maximumDepth, depth);

            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
        }
    }

    return maximumDepth;
};