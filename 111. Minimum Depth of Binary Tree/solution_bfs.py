from typing import *
from collections import deque

class TreeNode:
    """Definition for a binary tree node."""
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        q = deque()
        
        if root:
            q.append(root)

        depth = 0
        while q:
            depth += 1
            level = len(q)

            for _ in range(level):
                node = q.popleft()

                if not node.left and not node.right:
                    return depth
                
                node.left and q.append(node.left)
                node.right and q.append(node.right)

        return depth