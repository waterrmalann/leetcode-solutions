# Intuition

When I first saw this problem, this was the solution that sprung to mind. What if we turn it into an array? Wouldn't that make things way easier?
```py
def isPalindrome(head):
    arr = []
    curr = head
    while curr:
        arr.append(curr.val)
        curr = curr.next
    for i in range(len(arr)):
        if arr[i] != arr[len(arr) - i - 1]:
            return False
    return True
```
And definitely, yes it makes for a good solution that works! We keep the time complexity of *O(n)* but we introduce a space complexity of *O(n)* as well to store the extra array. The question specifically asks us to solve it in *O(1)* space. So there must be a better way to solve this.

We aren't forbidden from mutating the Linked List, so what if we use that to our advantage? Let's take a three step approach to solving this problem efficiently.

# Approach

### Step #1:

We first find the midpoint of the linked list. We can do this using the slow and fast pointer approach. We start a slow pointer from the head that moves one node at a time, while the fast pointer moves two nodes at a time.
```py
slow, fast = head, head
while fast and fast.next:
    fast = fast.next.next
    slow = slow.next
```
By the end of this loop, `slow` should be at the middle of the list.

### Step #2:

Here comes the trick, we reverse the right half of the linked list! I'm assuming you are already familiar with reversing a linked list, we basically apply the same code, but instead of starting from the head, we start from the `slow` node which is the middle, effectively reversing only the right half of the list.
```py
prev = None
while slow:
    nxt = slow.next
    slow.next = prev
    prev = slow
    slow = nxt
```
Our list should now be something like this, the middle node points to null.

- **Before:** `1 -> 2 -> 2 -> 1`
- **After:** `1 -> 2 -> 2 <- 1`

### Step #3:

Now we check if the list is a palindrome. We can simply do this by initializing two pointers, one that starts at the head and another that starts from the end.

Since we reversed the list, `prev` should be our end node and it should point backwards.

We move both pointers forwards at the same time and compare the two values. If they are not equal at any point, we can return False as the list is not a palindrome. If the traversal successfully finished, we can return True at the end.

```py
left, right = head, prev
while left and right:
    if left.val != right.val:
        return False
    left = left.next
    right = right.next
return True
```

# Code

- [Python](solution.py)