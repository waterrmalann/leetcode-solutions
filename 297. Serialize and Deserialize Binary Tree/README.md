# Serialize and Deserialize Binary Tree

The problem basically asks us to design an algorithm to serialize and deserialize a binary tree. There is no restriction on how the algorithm should work but we just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

# Intuition

Even though it is labelled as a 'Hard' problem, if you understand pre-order depth-first search in a binary tree, this is going to be quite trivial. 

All we have to do is traverse the tree in a pre-order manner and keep the result as a string (we also need to pereserve the null nodes that leaf nodes point to). 

Once that's done, reconstruction is as iterating over each element of the encoded string and recursively building subtrees.

# Approach & Code

## Serialization

We need to perform a depth-first traversal in pre-order. In order to keep track of the nodes we encounter, we will initialize a `tokens = []` as an empty array which we will push values to as we encounter them during the recursive DFS. 

**What we do need to keep note of** is that we also need to preserve the immediate null values that the leaf nodes point to because we are preserving both left and right children of every node we encounter, which includes null children. It would be impossible to reconstruct the tree otherwise. We need to uniquely identify null nodes, so we will mark them as an alphabetic `"x"` while we just keep the values with other nodes.

```python
def serialize(root):
    tokens = []
    def dfs(node):
        if not node:
            tokens.append('x')
        else:
            tokens.append(str(node.val))
            dfs(node.left)
            dfs(node.right)
    dfs(root)
    return ' '.join(tokens)
```

Given this simple binary tree.
```
        1
       / \ 
      2   3 
```
Our serialization function should yield this array.
```
[1, 2, 'x', 'x', 3, 'x', 'x']
```
We return that array, joined as a string separated by either a comma or a space.
```
"1 2 x x 3 x x"
```

## Deserialization

Reconstructing this string into a binary tree is not terribly difficult of a task. Let's define a helper functio `genTree` that takes in a array of tokens and recursively calls the itself on every element of the tokens array.

If the value of the current token is `'x'`, we simply return null, which serves as our base case. Otherwise, we create a new node set to the value that we get, and recursively call `genTree` on the next set of tokens for both the left and right children and finally return the root node we created.

```python
def deserialize(data):
    def genTree(tokens):
        val = next(tokens)
        if val == 'x':
            return None
        else:
            node = TreeNode(int(val))
            node.left = genTree(tokens)
            node.right = genTree(tokens)
            return node
    tokens = iter(data.split(' '))
    return genTree(tokens)
```

# Complexity Analysis

- **Serialization:**
    - **Time Complexity:** $O(n)$ as we traverse each node of the binary tree exactly once.
    - **Space Complexity:** $O(n)$ because the maximum depth of the recursion stack is equal to the height of the binary tree but we also keep an array of all the nodes in the tree.

- **Deserialization:**
    - **Time Complexity:** $O(n)$ because we process each token exactly once.
    - **Space Complexity:** $O(n)$ because the maximum depth of the recursion stack is equal to the height of the binary tree but we also keep an array of all the nodes in the tree.

# Code

- [Python](solution.py)
- [Javascript](solution.js)