from typing import *

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> bool:
        if not head.next:
            return None
        slow = fast = prev = head
        while fast and fast.next:
            fast = fast.next.next
            prev = slow
            slow = slow.next
        prev.next = slow.next
        return head