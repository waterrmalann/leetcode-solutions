/** Definition for singly-linked list. */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let prev = node, curr = node;
    while (curr && curr.next) {
        curr.val = curr.next.val;
        prev = curr;
        curr = curr.next;
    }
    prev.next = null;
};