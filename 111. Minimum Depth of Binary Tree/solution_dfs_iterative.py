from typing import *

class TreeNode:
    """Definition for a binary tree node."""
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        
        if not root:
            return 0

        stack = [(root, 1)]
        minimumDepth = float('inf')
        
        while stack:
            node, depth = stack.pop()

            if node:
                if not node.left and not node.right:
                    minimumDepth = min(minimumDepth, depth)
                    continue

                stack.append((node.left, depth + 1))
                stack.append((node.right, depth + 1))
        
        return minimumDepth