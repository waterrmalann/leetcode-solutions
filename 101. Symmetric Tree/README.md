# Symmetric Tree

The problem asks us to determine whether a binary tree is symmetric around its center. In other words, we need to check if the left subtree is a mirror reflection of the right subtree.

## Approach

We define a helper function `is_mirror` that takes two nodes as input, representing the roots of two subtrees. Inside this function, we perform the following checks:

1. If both nodes are null, they are symmetric.
2. If one node is null and the other is not, they are not symmetric.
3. If the values of the corresponding nodes are not equal, they are not symmetric.
4. Recursively check if the left subtree's left child is a mirror reflection of the right subtree's right child, and if the left subtree's right child is a mirror reflection of the right subtree's left child.

Finally, we call this `is_mirror` function with the root's left and right children.

```python
def isSymmetric(root):
    # an empty tree is symmetrical
    if not root:
        return True
        
    def is_mirror(left, right):
        # both sides null
        if not left and not right:
            return True
        
        # one side null
        if not left or not right:
            return False
        
        # unequal values
        if left.val != right.val:
            return False
        
        # recursively check for symmetry
        return is_mirror(left.left, right.right) and is_mirror(left.right, right.left)

    return is_mirror(root.left, root.right)
```

## Complexity Analysis

- **Time complexity:** Since we traverse each node once, the time complexity is $O(n)$, where $n$ is the number of nodes in the binary tree.
- **Space complexity:** The space complexity is $O(h)$, where $h$ is the height of the binary tree. This is because the maximum depth of the function call stack would be the height of the tree in the worst-case scenario, such as a skewed binary tree.

# Code

- [Python](solution.py)
- [Javascript](solution.js)