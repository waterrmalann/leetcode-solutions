# Intuition

Detecting a cycle in a linked list involves recognizing that a cycle exists when a node points back to a previous node in the list. This creates a loop, and the goal is to identify whether such a loop is present in the linked list.

# Approaches

### 1. Set:

This approach is one of the logically simpler solutions. It ivolves creating a set object, traversing through the linked list, checking if the element already exists in the set, and returning True if so. Otherwise, the node is added to the set. As checking for existence within a set is a constant-time operation, this approach is reasonably fast, with a time complexity of *O(n)* and space complexity of *O(n)* for the extra set.

```py
def hasCycle(head):
    visited = set()
    current = head
    while current:
        if current in visited:
            return True
        visited.add(current)
        current = current.next
    return False 
```

**Time Complexity:** *O(n)*
**Space Complexity:** *O(n)*

### 2. Fast & Slow Pointer:

This approach involves defining two pointers that start at the head: a slow pointer that moves one node at a time and a fast pointer that moves twice as fast. The logic is that if a cycle exists within the list, both the slow and fast pointers will eventually meet at one point. If they do, it indicates the presence of a cycle. This solution has a space complexity of only *O(1)*.

```py
def hasCycle(head):
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```
**Time Complexity:** *O(n)*
**Space Complexity:** *O(1)*

# Code

**Approach #1: Set**
- [JavaScript](solution1.js)
- [Python](solution1.py)

**Approach #2: Fast & Slow Pointer**
- [JavaScript](solution2.js)
- [Python](solution2.py)
