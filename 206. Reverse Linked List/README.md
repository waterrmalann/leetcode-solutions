# Intuition

The problem asks us to reverse a singly-linked list. We have to do it in-place and not pull any tricks like turning it into an array.

This basically requires us to invert all the pointers
```
1 -> 2 -> 3 -> None
```
to point at the previous nodes, and the old tail will be the new head.
```
3 -> 2 -> 1 -> None
```

# Iterative Approach

- **Time Complexity:** *O(n)*
- **Space Complexity:** *O(1)*

The most efficient, and easiest to understand method of solving this problem is the most obvious one. We simply traverse the linked list, and point each `node.next` toward the prevous node. Of course, we cannot simply look back on a singly linked list and so we will use two pointers. One pointer will traverse the list, another will closely follow, so we always have a "previous" node to point the current node back to.

In the given linked list, these are the pointers we will be using.
```
      curr   temp
 1  -> 2  ->  3  -> None
prev
```
1. `curr` keeps track of the node we're traversing through.
2. `prev` keeps track of the node just before `curr`, this initially starts at None. `curr` will be made to point back at `prev` 
3. `temp` keeps track of the node ahead of `curr`, this is important because otherwise once we point the `curr -> prev`, we will lose reference for the node that `curr` was previously pointing to, therefore losing the entire rest of the list.

Let's take a look at the code.
```py
def reverseList(head):
    prev = None
    curr = head
    while curr:
        temp = curr.next # don't lose reference to node ahead
        curr.next = prev # point `curr -> prev`
        prev = curr # move `prev` forwards.
        curr = temp # move `curr` forwards.
    return prev
```
In the end, we return `prev` because it should be at the end of the linked list, the old tail has become the new head due to inversion of pointers.


# Recursive Approach

- **Time Complexity:** *O(n)*
- **Space Complexity:** *O(n)* *(recusive call stack)*

A less efficient, but still valid approach is by using recursion. It involves dividng the main problem into sub problems and solving them individually.

```py
def reverseList(head):
    # Base case: empty list or single node
    if not head or not head.next:
        return head
    
    # Recursively reverse the rest of the list
    new_head = reverseList(head.next)
    
    # Update pointers to reverse the current node
    head.next.next = head
    head.next = None

    return new_head
```

1. The function `reverseList` takes a node as input. If the node is either `None` or its `next` pointer is `None`, it means we've reached the end of the list and the current node is the new head.
2. Otherwise, we call `reverseList` on the `next` node. This recursively reverses the remaining part of the list.
3. Once the recursion returns, we have the reversed sub-list starting from the `next` node. We update the `next` pointer of the current node to point to the reversed sub-list.
4. We update the `next` pointer of the `next` node (which is now the last node in the original list) to point back to the current node. This effectively inserts the current node at the beginning of the reversed sub-list.
5. Finally, we return the new head of the reversed list, which is the node we started with.

I know it may be quite difficult to wrap your head around but here's a more visual representation, this is the best I can do in text.
```
1 -> 2 -> 3 -> N   // Initial Linked List

1 -> 2 -> 3 -> N    
     2 -> 3 -> N    // Call: reverseList(1)
          3 -> N    // Call: reverseList(2)
          3 -> N    // Call: reverseList(3)
1 -> 2 <- 3    N    // Pop:  reverseList(3)
1 <- 2 <- 3    N    // Pop:  reverseList(2)
N <- 1 <- 2 <- 3    // Pop:  reverseList(1)
     
3 -> 2 -> 1 -> N   // Final State

```

# Code

**Iterative Approach:**
- [Python](solution_iterative.py)
- [Javascript](solution_iterative.js)

**Recursive Approach:**
- [Python](solution_recursive.py)
- [Javascript](solution_recursive.js)