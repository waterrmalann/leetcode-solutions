# Intuition

The problem requires validating whether a given binary tree is a Binary Search Tree (BST) or not. In a BST, for each node, the values in its left subtree are less than the node's value, and the values in its right subtree are greater than the node's value.

We could run through every node and make sure that it has a smaller left child an da larger right child, but this misses the case where a deeply nested child node satisfies the condition for its immediate parent but not for the grandparents or the root of the tree. For that, we would have to check every value against every other value of the tree to make sure that it is valid, this results in a time complexity of $$O(n^2)$$ which is undesirable for us.

## Approach #1: In-Order Sort Check

If we perform a depth-first search on a binary search tree in-order, we are always guaranteed to get a sorted version of the tree. We can take advantage of this property by performing an In-order DFS on the binary tree and making sure that it is in sorted order. If it is, we have a valid BST.

We could do this of course by pushing elements into an array as we traverse in-order, and then running a second pass to make sure it is sorted but to save on space complexity, we can just store the previous value and check that against the current value. This can be done within the DFS and we will adjust a `flag` value that is defined outside based on the result of our condition.

```py
def isValidBST(root):
    flag = True
    prev_value = float('-inf')
    def dfs(node):
        nonlocal flag, prev_value
        if node:
            dfs(node.left)
            if node.val <= prev_value:
                flag = False
            prev_value = node.val
            dfs(node.right)
    dfs(root)

    return flag
```

- **Time Complexity:** $$O(n)$$
- **Space Complexity:** $$O(h)$$ *(the recursive call stack space used is proportional to the height of the binary tree)*

## Approach #2: Check If Within Range

Alternatively, we could pass in two additional parameters to our helper function `valid(node, left, right)` that checks whether the subtree rooted at node is a valid BST. The additional parameters, `left` and `right`, represents the range of valid values for the current node. Initially, the range is set to negative infinity for left and positive infinity for right.

For each node, we check if its value lies within the range (left, right). If it does, we recursively check its left and right subtrees, updating the range accordingly. If any node violates the BST property, the function returns False. If the entire tree is validated, the function returns True.

```py
def isValidBST(root):
    def valid(node, left, right):
        if not node:
            return True
        if not (left < node.val < right):
            return False
        
        return (
            valid(node.left, left, node.val) and valid(node.right, node.val, right)
        )

    return valid(root, float('-inf'), float('inf'))
```

- **Time Complexity:** $$O(n)$$
- **Space Complexity:** $$O(h)$$ *(the recursive call stack space used is proportional to the height of the binary tree)*

# Code

**Approach #1: In-Order Sort Check**
- [Python](solution1.py)

**Approach #2: Check If Within Range**
- [Python](solution2.py)
