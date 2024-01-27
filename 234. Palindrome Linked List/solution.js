/** Definition for singly-linked list. */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // 1. Find the midpoint using Floyd's Algorithm
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse the second half.
    let prev = null;
    while (slow) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    // 3. Traverse from both ends and verify palindrome.
    let left = head, right = prev;
    while (left && right) {
        if (left.val != right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }

    return true;
};