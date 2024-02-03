from typing import *

class TreeNode:
    """Definition for a binary tree node."""
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        flag = True
        prev_value = float('-inf')
        def dfs(node):
            nonlocal flag, prev_value
            if node:
                dfs(node.left)
                if node.val <= prev_value:
                    flag = False
                prev_value = node.val
                dfs(node.right)
        dfs(root)

        return flag