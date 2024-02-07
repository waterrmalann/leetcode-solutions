from typing import *

class TreeNode:
    """Definition for a binary tree node."""
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Codec:
    def serialize(self, root: TreeNode) -> str:
        """Encodes a tree to a single string."""
        tokens = []
        def dfs(node):
            if not node:
                tokens.append('x')
            else:
                tokens.append(str(node.val))
                dfs(node.left)
                dfs(node.right)
        dfs(root)
        return ' '.join(tokens)

    def deserialize(self, data: str) -> TreeNode:
        """Decodes your encoded data to tree."""
        def genTree(tokens):
            val = next(tokens)
            if val == 'x':
                return None
            else:
                node = TreeNode(int(val))
                node.left = genTree(tokens)
                node.right = genTree(tokens)
                return node
        tokens = iter(data.split(' '))
        return genTree(tokens)