# Maximum Depth of Binary Tree

The problem requires finding the maximum depth of a binary tree. The depth of a binary tree is defined as the length of the longest path from the root node to any leaf node.

## Approach #1: Depth-First Search

The initial intuition for solving this problem is to use a depth-first search (DFS) approach. By recursively traversing the left and right subtrees, we can determine the depth of the tree. The maximum depth at each node is calculated by taking the maximum of the depths of its left and right children and adding 1.

```py
def maxDepth(root):
    # Base case: if the root is None, return 0
    if not root:
        return 0
    
    # Recursively calculate the depth of the left subtree
    left_depth = maxDepth(root.left)
    
    # Recursively calculate the depth of the right subtree
    right_depth = maxDepth(root.right)
    
    # Return the maximum of left and right depths plus 1
    return max(left_depth, right_depth) + 1
```

### Iterative

We could also solve the problem using the same DFS method, but iteratively using a stack to simulate the recursive calls. The algorithm would involve pushing nodes onto the stack and updating their depths until the stack is empty.

```py
def maxDepth(root):
    stack = [(root, 1)] # (node, depth)
    maxDepth = 0

    while len(stack) > 0:
        node, depth = stack.pop()
    
        if node:
            # Update the `maxDepth` if current depth is larger.
            maxDepth = max(maxDepth, depth)
    
            # Push the left and right children to the stack + depth information.
            stack.append((node.left, depth + 1))
            stack.append((node.right, depth + 1))
    
    return maxDepth
```

- Time complexity: $O(n)$, where $n$ is the number of nodes in the binary tree. Each node is visited once.
- Space complexity: $O(h)$, where $h$ is the height of the binary tree. The space complexity is determined by the maximum depth of the recursive call stack or iterative stack.

## Approach #2: Breadth-First Search

BFS is another option to find the maximum depth. As we are guaranteed to traverse every level during a breadth-first search, we can keep track of the depth and increment it after processing each level. Once the traversal is finished, we can simply return the final depth.

```py
def maxDepth(root):
    queue = deque()  # initialize a queue

    if root is not None:
        queue.append(root)

    depth = 0

    while len(queue) > 0:
        depth += 1
        
        # the length of this level
        current_length = len(queue)
        
        # run a loop `current_length` times
        for i in range(current_length):
            # dequeue the current node
            node = queue.popleft()

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