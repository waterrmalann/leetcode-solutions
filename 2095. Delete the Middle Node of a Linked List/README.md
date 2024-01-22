# Intuition

When I first started learning Linked Lists, my approach to solving this problem was similar to solving it in an array. I would iterate over the entire linked list, calculating its length in the first pass, then dividing the length by two to find the middle, and finally, traversing the list again until the node right before the middle to delete it. This approach involves two passes over the linked list.

That seems to be a logical solution but we actually have a way simpler, way more efficient single-pass approach. Using the slow and fast pointer method.

# Approach

We define a slow pointer, and a fast pointer that both start at the head. The slow pointer moves forward one node at a time slow = slow.next, while the fast pointer moves forward two nodes at a time fast = fast.next.next. This way, by the time the fast node which travels twice as fast reaches the end, the slow node will be at the exact middle of the linked list.

We will also keep an additional prev pointer that closely follows the slow pointer so that we have a reference to the node before the middle node, in order to actually delete it.

# Complexity

- Time complexity: *O(n)*
- Space complexity: *O(1)*

# Code

- [JavaScript](solution.js)
- [Python](solution.py)