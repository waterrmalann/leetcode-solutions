# Binary Tree Zigzag Level Order Traversal

The problem asks us to traverse a binary tree in level-order, but every other level should be returned in reverse resembling an output that we would get if we take a zig zag look through each level of the binary tree.

## Intuition & Approach

This problem can be approached almost the same way as we solve the normal **[Binary Tree Level Order Traversal](/102.%20Binary%20Tree%20Level%20Order%20Traversal/)** question. It's just that for every other level, we will show it in reverse, which satisfies the problem condition.

In order to zig zag, we need a way to keep know if we're supposed to zig or zag, ie: if we're supposed to keep the current level in its original order or in reverse order.

We could do this by either checking if the depth of the level is an even number, and then decide whether we want to prepend the buffer list or append it.

An approach I personally prefer is to use a `flag` variable initially set to `false`, and inverting it every iteration/level. Based on the state of the flag, we can determine if we want to zig or zag.

```py
def zigzagLevelOrder(root):
    # We need a queue for the BFS
    q = deque()

    if root:
        q.append(root)
    
    levels = []

    # A flag keeps track of whether we are in
    # 'zig' mode or 'zag' mode, ie: reverse or not
    reverse = False

    while q:
        # The nodes at the current level.
        current_length = len(q)
        # A buffer array to keep the current level.
        current_level = []

        for _ in range(current_length):
            node = q.popleft()
            if reverse:
                # If flag is set to reverse,
                # insert at the front
                current_level.insert(0, node.val)
            else:
                # Otherwise, insert at back
                current_level.append(node.val)
            
            if node.left is not None:
                q.append(node.left)
            if node.right is not None:
                q.append(node.right)

        levels.append(current_level)
        # We then flip the flag for the next level
        reverse = not reverse

    return levels
```

## Complexity Analysis

- **Time Complexity:** $O(n)$, where $n$ is the number of nodes in the tree.
- **Space Complexity:** $O(n)$, where $n$ is the longest width of the tree.

# Code

- [Python](solution.py)
- [Javascript](solution.js)