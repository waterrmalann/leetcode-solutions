from typing import *
from collections import deque

class TreeNode:
    """Definition for a binary tree node."""
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:

        q = deque()
        if root:
            q.append(root)
        
        levels = []
        reverse = False
        while q:
            current_length = len(q)
            current_level = []

            for _ in range(current_length):
                node = q.popleft()
                if reverse:
                    current_level.insert(0, node.val)
                else:
                    current_level.append(node.val)
                
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)

            levels.append(current_level)
            reverse = not reverse

        return levels