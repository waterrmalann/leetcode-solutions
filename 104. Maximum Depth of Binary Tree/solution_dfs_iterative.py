from typing import *

class TreeNode:
    """Definition for a binary tree node."""
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        
        stack = [(root, 1)] # (node, depth)
        maxDepth = 0

        while stack:
            node, depth = stack.pop()
        
            if node:
                maxDepth = max(maxDepth, depth)
        
                stack.append((node.left, depth + 1))
                stack.append((node.right, depth + 1))
        
        return maxDepth