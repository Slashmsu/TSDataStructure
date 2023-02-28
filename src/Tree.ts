import { TreeNode } from './TreeNode/TreeNode';

export class Tree<T> {

    // =========================================================================================================================================================
    // Private properties
    // =========================================================================================================================================================

    private root: TreeNode<T>;

    // =========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    constructor(rootValue: T) {
        this.root = new TreeNode(rootValue);
    }

    // =========================================================================================================================================================
    // Public methods
    // =========================================================================================================================================================

    /**
     * Returns the root node of the tree.
     * @returns The root node of the tree.
     */
    getRoot(): TreeNode<T> {
        return this.root;
    }

    /**
     * Adds a child node to a given parent node.
     * @param parent The parent node to add the child to.
     * @param childValue The value of the child node to add.
     * @returns The newly created child node.
     */
    addChild(parent: TreeNode<T>, childValue: T): TreeNode<T> {
        const child = new TreeNode(childValue);
        parent.addChild(child);
        return child;
    }

    /**
     * Removes a node and all of its children from the tree.
     * @param node The node to remove from the tree.
     */
    removeNode(node: TreeNode<T>): void {
        if (node === this.root) {
            this.root = null;
        } else {
            const parent = node.getParent();
            parent.removeChild(node);
        }
    }

    /**
     * Returns the number of nodes in the tree.
     * @returns The number of nodes in the tree.
     */
    size(): number {
        let size = 0;
        this.traverseLevelOrder(() => {
            size++;
        });
        return size;
    }

    /**
     * Checks if the tree is empty (i.e., has no nodes).
     * @returns True if the tree is empty; false otherwise.
     */
    isEmpty(): boolean {
        return this.root === null;
    }

    /**
     * Traverse the tree in breadth-first order and apply the given callback function to each node.
     * @param callback The callback function to apply to each node.
     */
    traverseLevelOrder(callback: (node: TreeNode<T>) => void): void {
        if (this.root === null) {
            return;
        }

        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            callback(node);
            node.getChildren().forEach(child => queue.push(child));
        }
    }
}
