/** Definition for singly-linked list. */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var deleteMiddle = function(head) {
    if (!head.next) {
        return null;
    }

    let slow = head, fast = head, pre = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        pre = slow;
        slow = slow.next;
    }
    pre.next = slow.next;
    return head;
};