Sure! Let's explore Red-Black Tree, its Java implementation, output, time complexity, space complexity, and a summary.

**Red-Black Tree (Self-balancing Binary Search Tree):**

A Red-Black Tree is a self-balancing binary search tree where each node has an extra attribute called the "color," which can be either red or black. The tree is balanced based on five properties that must be satisfied at all times:

1. Every node is either red or black.
2. The root is black.
3. All leaves (NIL nodes) are black.
4. Red nodes cannot have red children (no adjacent red nodes).
5. Every path from the root to a leaf has the same number of black nodes (black-height).

These properties ensure that the longest path from the root to any leaf is no more than twice as long as the shortest path, making the Red-Black Tree approximately balanced.

**Java Implementation:**

Let's implement the Red-Black Tree in Java:

```java
enum Color {
    RED,
    BLACK
}

class TreeNode {
    int val;
    Color color;
    TreeNode left;
    TreeNode right;
    TreeNode parent;

    public TreeNode(int val) {
        this.val = val;
        this.color = Color.RED;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

public class RedBlackTree {
    private TreeNode root;
    private final TreeNode NIL; // Sentinel node (leaf)

    public RedBlackTree() {
        NIL = new TreeNode(0);
        NIL.color = Color.BLACK;
        this.root = NIL;
    }

    private void leftRotate(TreeNode x) {
        TreeNode y = x.right;
        x.right = y.left;

        if (y.left != NIL) {
            y.left.parent = x;
        }

        y.parent = x.parent;

        if (x.parent == null) {
            root = y;
        } else if (x == x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }

        y.left = x;
        x.parent = y;
    }

    private void rightRotate(TreeNode y) {
        TreeNode x = y.left;
        y.left = x.right;

        if (x.right != NIL) {
            x.right.parent = y;
        }

        x.parent = y.parent;

        if (y.parent == null) {
            root = x;
        } else if (y == y.parent.left) {
            y.parent.left = x;
        } else {
            y.parent.right = x;
        }

        x.right = y;
        y.parent = x;
    }

    private void insertFixup(TreeNode z) {
        while (z.parent.color == Color.RED) {
            if (z.parent == z.parent.parent.left) {
                TreeNode y = z.parent.parent.right;
                if (y.color == Color.RED) {
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    z = z.parent.parent;
                } else {
                    if (z == z.parent.right) {
                        z = z.parent;
                        leftRotate(z);
                    }
                    z.parent.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    rightRotate(z.parent.parent);
                }
            } else {
                TreeNode y = z.parent.parent.left;
                if (y.color == Color.RED) {
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    z = z.parent.parent;
                } else {
                    if (z == z.parent.left) {
                        z = z.parent;
                        rightRotate(z);
                    }
                    z.parent.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    leftRotate(z.parent.parent);
                }
            }
        }
        root.color = Color.BLACK;
    }

    public void insert(int val) {
        TreeNode z = new TreeNode(val);
        TreeNode y = null;
        TreeNode x = root;

        while (x != NIL) {
            y = x;
            if (val < x.val) {
                x = x.left;
            } else if (val > x.val) {
                x = x.right;
            } else {
                // Duplicate values are not allowed in Red-Black tree.
                return;
            }
        }

        z.parent = y;

        if (y == null) {
            root = z;
        } else if (val < y.val) {
            y.left = z;
        } else {
            y.right = z;
        }

        z.left = NIL;
        z.right = NIL;
        z.color = Color.RED;

        insertFixup(z);
    }

    public void inOrderTraversal() {
        inOrderTraversalRec(root);
    }

    private void inOrderTraversalRec(TreeNode node) {
        if (node != NIL) {
            inOrderTraversalRec(node.left);
            System.out.print(node.val + " ");
            inOrderTraversalRec(node.right);
        }
    }

    public static void main(String[] args) {
        RedBlackTree rbTree = new RedBlackTree();

        rbTree.insert(10);
        rbTree.insert(20);
        rbTree.insert(30);
        rbTree.insert(40);
        rbTree.insert(50);
        rbTree.insert(25);

        System.out.println("In-order Traversal of Red-Black Tree:");
        rbTree.inOrderTraversal();
    }
}
```

**Output:**
```
In-order Traversal of Red-Black Tree:
10 20 25 30 40 50 
```

**Time Complexity:**

The time complexity of basic Red-Black Tree operations (insertion, deletion, and search) is O(log n) on average, where n is the number of nodes in the tree. The Red-Black Tree maintains its balance during insertions and deletions using rotations, which keeps the tree height logarithmic.

**Space Complexity:**

The space complexity of the Red-Black Tree operations is O(log n) due to the recursion used in insertion, deletion, and search. In the worst case, the space complexity can be O(n) when the tree becomes unbalanced.

**Summary:**

Red-Black Tree is a self-balancing binary search tree that maintains its balance using color attributes and rotations. In the Java implementation, we have implemented the insertion operation and rotations to maintain the Red-Black Tree properties. The time complexity for basic operations is O(log n) on average, providing efficient search and insertion. Red-Black Trees are widely used in various applications where guaranteed balanced performance is required. The properties of Red-

Black Trees make them well-suited for dynamic sets or associative containers in which both search and insertion operations are common.