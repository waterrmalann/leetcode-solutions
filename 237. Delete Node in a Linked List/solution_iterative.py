from typing import *

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        curr = node
        second_last = node
        while curr and curr.next:
            nxt = curr.next
            curr.val = nxt.val
            second_last = curr
            curr = curr.next
        second_last.next = None