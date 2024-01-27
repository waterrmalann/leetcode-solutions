from typing import *

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        # Step 1: Find Midpoint
        slow, fast = head, head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
        
        # Step 2: Reverse right half
        prev = None
        while slow:
            nxt = slow.next
            slow.next = prev
            prev = slow
            slow = nxt
        
        # Step 3: Start from both ends, validate
        left, right = head, prev
        while left and right:
            if left.val != right.val:
                return False
            left = left.next
            right = right.next
        
        return True