class Solution:
    def deleteMiddle(self, head):
        if not head.next:
            return None
        slow = fast = prev = head
        while fast and fast.next:
            fast = fast.next.next
            prev = slow
            slow = slow.next
        prev.next = slow.next
        return head