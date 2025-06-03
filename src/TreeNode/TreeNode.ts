export class TreeNode<T> {

    // =========================================================================================================================================================
    // Public properties
    // =========================================================================================================================================================

    /**
     * Value of the node.
     */
    value: T;

    /**
     * Parent of the node.
     */
    parent: TreeNode<T> | null = null;

    /**
     * Children of the node.
     */
    children: TreeNode<T>[] = [];

    // =========================================================================================================================================================
    // Private properties
    // =========================================================================================================================================================

    // =========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    constructor(value: T) {
        this.value = value;
    }

    // =========================================================================================================================================================
    // Public methods
    // =========================================================================================================================================================

    /**
     * Returns the value of the node.
     */
    getValue(): T {
        return this.value;
    }

    /**
     * Sets the value of the node.
     * @param value
     */
    setValue(value: T): void {
        this.value = value;
    }

    /**
     * Returns the parent of the node.
     */
    getParent(): TreeNode<T> | null {
        return this.parent;
    }

    /**
     * Sets the parent of the node.
     * @param parent
     */
    setParent(parent: TreeNode<T>): void {
        this.parent = parent;
    }

    /**
     * Returns the children of the node.
     */
    getChildren(): TreeNode<T>[] {
        return this.children;
    }

    /**
     * Adds a child to the node.
     * @param child
     */
    addChild(child: TreeNode<T>): void {
        child.setParent(this);
        this.children.push(child);
    }

    /**
     * Removes a child from the node.
     * @param child
     */
    removeChild(child: TreeNode<T>): void {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
            child.setParent(null);
        }
    }

    /**
     * Checks whether the node has no children.
     */
    isLeaf(): boolean {
        return this.children.length === 0;
    }

    /**
     * Returns the height of the node.
     */
    getHeight(): number {
        if (this.isLeaf()) {
            return 0;
        } else {
            return Math.max(...this.children.map(child => child.getHeight())) + 1;
        }
    }

    /**
     * Returns the depth of the node.
     */
    getDepth(): number {
        if (this.parent === null) {
            return 0;
        } else {
            return this.parent.getDepth() + 1;
        }
    }

    /**
     * Traverse the tree in preorder (root, left subtree, right subtree) and apply the given callback function to each node.
     * @param callback The callback function to apply to each node.
     */
    traversePreorder(callback: (node: TreeNode<T>) => void): void {
        callback(this);
        this.children.forEach(child => child.traversePreorder(callback));
    }

    /**
     * Traverse the tree in postorder (left subtree, right subtree, root) and apply the given callback function to each node.
     * @param callback The callback function to apply to each node.
     */
    traversePostorder(callback: (node: TreeNode<T>) => void): void {
        this.children.forEach(child => child.traversePostorder(callback));
        callback(this);
    }

    /**
     * Traverse the tree in inorder (left subtree, root, right subtree) and apply the given callback function to each node.
     * @param callback The callback function to apply to each node.
     */
    traverseInorder(callback: (node: TreeNode<T>) => void): void {
        if (this.children.length >= 1) {
            this.children[0].traverseInorder(callback);
        }
        callback(this);
        if (this.children.length >= 2) {
            this.children[1].traverseInorder(callback);
        }
    }

    /**
     * Traverse the tree level by level, starting at the root, and apply the given callback function to each node.
     * @param callback The callback function to apply to each node.
     */
    traverseLevelOrder(this: TreeNode<T>, callback: (node: TreeNode<T>) => void): void {
        const queue = [this];
        while (queue.length > 0) {
            const node = queue.shift()!;
            callback(node);
            node.children.forEach(child => queue.push(child));
        }
    }

}
