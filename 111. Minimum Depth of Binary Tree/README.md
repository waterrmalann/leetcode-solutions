# Minimum Depth of Binary Tree

The problem requires finding the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

## Approach #1: Depth-First Search

We can solve the problem similar to how we solve the Maximum Depth of Binary Tree variant of this question using a depth-first search (DFS) approach. By recursively traversing the left and right subtrees, we can determine the depth of the tree. The minimum depth at each node is calculated by taking the minimum of the depths of its left and right children and adding 1.

We do additionally have to check if we encounter a leaf node and return 1 accordingly, and if we encounter a root without a left or right subtree, return the height of the opposite subtree + 1.

```py
def minDepth(root):
    # Base case: if the root is None, return 0
    if not root:
        return 0

    # If it is a leaf node, we return 1
    if not root.left and not root.right:
        return 1
    
    # Recursively calculate the depth of the left subtree
    leftSubtree = minDepth(root.left)

    # Recursively calculate the depth of the right subtree
    rightSubtree = minDepth(root.right)
    
    # If we don't have a subtree to the left,
    # return the height of the right subtree + 1
    if not root.left:
        return rightSubtree + 1
    
    # If we don't have a subtree to the right,
    # return the height of the left subtree + 1
    if not root.right:
        return leftSubtree + 1
    
    # Return the minimum of left and right depths plus 1
    return min(leftSubtree, rightSubtree) + 1
```

### Iterative

We could also solve the problem using the same DFS method, but iteratively using a stack to simulate the recursive calls. The algorithm would involve pushing nodes onto the stack and updating their depths until the stack is empty.

```py
def minDepth(root):
    if not root:
        return 0

    stack = [(root, 1)] # (node, depth)
    minDepth = float('inf')

    while len(stack) > 0:
        node, depth = stack.pop()

        if node:
            # We only update minimum if it is a leaf node.
            if not node.left and not node.right:
                minDepth = min(minDepth, depth)
                continue

            # Push the left and right children to the stack + depth information.
            stack.append((node.left, depth + 1))
            stack.append((node.right, depth + 1))
    
    return minDepth
```

- Time complexity: $O(n)$, where $n$ is the number of nodes in the binary tree. Each node may be visited once.
- Space complexity: $O(h)$, where $h$ is the height of the binary tree. The space complexity is determined by the maximum depth of the recursive call stack or iterative stack.

## Approach #2: Breadth-First Search

BFS is another option to find the minimum depth. As we traverse level by level during a breadth-first search, we can break out and return as soon as we encounter our first leaf node or when the queue is empty.

```py
def minDepth(root):
    queue = deque()  # initialize a queue

    if root is not None:
        queue.append(root)

    depth = 0

    while len(queue) > 0:
        depth += 1

        # the length of this level
        current_length = len(queue)

        # run a loop `current_length` times
        for _ in range(current_length):
            # dequeue the current node
            node = queue.popleft()

            # return depth immediately if we are at a leaf node
            if not node.left and not node.right:
                return depth

            # enqueue the left and right nodes if they exist
            if node.left is not None:
                queue.append(node.left)
            if node.left is not None:
                queue.append(node.right)

    return depth
```

- Time complexity: $O(n)$, where $n$ is the number of nodes in the binary tree. In the worst case, we visit each node exactly once during the traversal, leading to a linear time complexity.
- Space complexity: $O(w)$, where $w$ is the maximum width (number of nodes at the same level) of the binary tree. In the worst case, the maximum number of nodes in the queue at any point corresponds to the width of the tree at its widest level.

# Code

**Approach #1: Depth-First Search (Recursive)**
- [Python](solution_dfs_recursive.py)
- [Javascript](solution_dfs_recursive.js)

**Approach #1: Depth-First Search (Iterative)**
- [Python](solution_dfs_iterative.py)
- [Javascript](solution_dfs_iterative.js)

**Approach #2: Breadth-First Search**
- [Python](solution_bfs.py)
- [Javascript](solution_bfs.js)