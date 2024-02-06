from typing import *
from collections import deque

class TreeNode:
    """Definition for a binary tree node."""
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        q = deque()

        if root:
            q.append(root)

        levels = 0

        while q:
            levels += 1
            current_length = len(q)
            
            for _ in range(current_length):
                node = q.popleft()

                node.left and q.append(node.left)
                node.right and q.append(node.right)
        
        return levels