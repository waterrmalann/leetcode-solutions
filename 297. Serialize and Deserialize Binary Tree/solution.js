/** Definition for a binary tree node. */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    let data = [];
    function dfs(node) {
        if (node) {
            data.push(node.val);
            dfs(node.left);
            dfs(node.right);
        } else {
            // we also keep track of null nodes
            data.push('x');
        }
    }
    dfs(root);
    return data.join(' ');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    function generateTree(tokens) {
        // we will pop to reduce the tokens array and get the next element
        let val = tokens.pop();
        if (val === 'x') {
            return null;
        } else {
            let node = new TreeNode(Number(val));
            node.left = generateTree(tokens);
            node.right = generateTree(tokens);
            return node;
        }
    }
    // we will reverse the string to make it easier to pop
    let tokens = data.split(' ').reverse();
    return generateTree(tokens);
};