/** Definition for singly-linked list. */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function isPalindrome(head: ListNode | null): boolean {
    // 1. Find the midpoint using Floyd's Algorithm
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // 2. Reverse the second half.
    let prev: ListNode | null = null;
    while (slow) {
        let next: ListNode | null = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    // 3. Traverse from both ends and verify palindrome.
    let left: ListNode | null = head;
    let right: ListNode | null = prev;
    while (left && right) {
        if (left.val != right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }

    return true;
};