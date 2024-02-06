# Invert Binary Tree

Given the root of a binary tree, invert the tree and return its root.

**Before Inversion:**
```
        1
       / \ 
      2   3 
     / \ / \ 
    4  5 6  7 

```

**After Inversion:**
```
        1
       / \
      3   2
     / \ / \
    7  6 5  4
```

## Intuition

Although the problem may look a bit difficult, it's actually very simple. We can solve this recursively by traversing the tree and swapping the left and right children of each node.

## Approach

Take a look at the example tree I've given above. Let's simplify, what is the smallest tree we could swap here? If we take a look at the deepest part of the left side, we will see this subtree.
```
      2                  2
     / \       ->       / \
    4   5              5   4
```
Swapping this is as easy as swapping the `root.left` with the `root.right`.

As we recursively go deeper, we will be swapping smaller and smaller subtrees, and then those subtrees with its sibling subtrees as our recursive calls unwind back up where we will finally end up with a fully inverted tree.

```python
def invertTree(self, root):
    # An empty (sub)tree can be considered already inverted.
    if not root:
        return None
    
    # Swap the left and right children
    root.left, root.right = root.right, root.left

    # Recursively swap subtrees
    invertTree(root.left)
    invertTree(root.right)

    return root
```

## Complexity Analysis

- **Time complexity:** $O(n)$, where $n$ is the number of nodes in the binary tree. This is because we visit each node exactly once.

- **Space complexity:** $O(h)$, where $h$ is the height of the binary tree. This is because the recursion stack can go as deep as the height of the tree.

# Code

- [Python](solution.py)
- [Javascript](solution.js)