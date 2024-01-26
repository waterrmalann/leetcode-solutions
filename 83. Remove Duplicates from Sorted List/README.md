# Intuition

The problem is asking us to remove duplicate elements from a sorted linked list. Since the list is sorted, duplicate elements will be adjacent to each other. To solve this, we can iterate through the list and compare each node's value with the next node's value. If they are the same, we can skip the next node, effectively removing the duplicate.

# Approach

- Traverse through the linked list while `current` and `current.next` are not null.
- Check if the value of the `current` node is equal to the value of the `current.next` node.
    - If they are equal, update the next pointer of the current node to the skip the next node by doing `current.next = current.next.next`.
    - If they are not equal, simply move the current node forwards by doing `current = current.next`.
-  This process is continued until the end of the list is reached where we return the head.

# Complexity

- Time complexity: *O(n)*
- Space complexity: *O(1)*

# Code

- [JavaScript](solution.js)