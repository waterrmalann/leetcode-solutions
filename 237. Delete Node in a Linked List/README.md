# 2 Lines O(1) Time/Space

```py
def deleteNode(node):
    node.val = node.next.val
    node.next = node.next.next
```

**Time:** $$O(1)$$ • **Space:** $$O(1)$$

This is the best way to solve this problem, but it did not come to my mind initially. I actually thought of a solution similar to how we delete elements in an array, by shifting the next elements to the back.

Although the iterative approach is not efficient and carries a time complexity of $$O(n)$$, it is still worth looking at as it helps work with linked lists as a beginner.

## Iterative

The iterative approach basically keeps a current pointer, and shifts the values in front towards the back. Once we're finished shifting values through the list, we point the second last node to null.

```py
def deleteNode(node):
    prev_curr = node
    curr = node
    while curr and curr.next:
        curr.val = curr.next.val
        prev_curr = curr
        curr = curr.next
    prev_curr.next = None
```

**Time:** $$O(n)$$ • **Space:** $$O(1)$$

## Recursive

The recursive approach involves replacing the value of the input node with the next value. Our base case is if we are given the second last node, in which case we point it towards null. Otherwise, we recursively call the function on the next node.

```py
def deleteNode(node):
    node.val = node.next.val
    if not node.next.next:
        node.next = None
    else:
        deleteNode(node.next)
```

**Time:** $$O(n)$$ • **Space:** $$O(n)$$

# Code

**2 Lines Solution**
- [Python](solution.py)

**Iterative**
- [Python](solution_iterative.py)

**Recursive**
- [Python](solution_recursive.py)
