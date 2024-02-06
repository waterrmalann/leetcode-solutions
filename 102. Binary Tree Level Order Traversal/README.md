# Binary Tree Level Order Traversal

The question basically asks us to return an array consisting of subarrays that correspond to each level of the given binary tree.

**For an example, given this binary tree:**
```
        1
       / \ 
      2   3 
     / \ / \ 
    4  5 6  7 
```
**The output should be:**
```
[
    [1],
    [2, 3],
    [4, 5, 6, 7]
]
```

## Intuition & Approach

The easiest and most obvious way to solve this problem is to use the Breadth-First Search (BFS) algorithm which, by design systematically explores all the nodes in a tree level by level.

## Algorithm

1. Begin with an empty queue `q` to store nodes.
2. Enqueue the root node into the queue if it exists.
3. Initialize an empty list `levels` to store the node values at each level.
4. While the queue is not empty:
    - Get the current length of the queue (`current_length`) which represents the number of nodes in the current level.
    - Initialize an empty list `current_level` to store the node values of the current level.
    - Iterate `current_length` times:
        - Dequeue a node from the front of the queue.
        - Append the value of the dequeued node to `current_level`.
        - Enqueue the left child of the dequeued node if it exists.
        - Enqueue the right child of the dequeued node if it exists.
    - Append `current_level` to `levels`.
5. Return `levels`.

```py
def levelOrder(root):
    if root:
        q.append(root)
    
    levels = []
    while q:
        current_length = len(q)
        current_level = []

        for _ in range(current_length):
            node = q.popleft()
            current_level.append(node.val)

            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)

        levels.append(current_level)
    return levels
```

## Complexity Analysis
- **Time Complexity:** $O(n)$ where $n$ is the number of nodes in the binary tree. This is because we visit each node once during BFS traversal.
- **Space Complexity:** $O(n)$ where $n$ is the maximum number of nodes at any level of the binary tree. In the worst case, the queue can contain all the nodes at the maximum level.

# Code

- [Python](solution.py)
- [Javascript](solution.js)