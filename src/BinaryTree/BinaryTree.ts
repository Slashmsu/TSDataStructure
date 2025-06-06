import { BinaryTreeNode } from '../Nodes/BinaryTreeNode';

export class BinaryTree<T> {

    // =========================================================================================================================================================
    // Public properties
    // =========================================================================================================================================================

    // =========================================================================================================================================================
    // Private properties
    // =========================================================================================================================================================

    private _root: BinaryTreeNode<T>;

    // =========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    constructor() {
        this._root = new BinaryTreeNode<T>(null);
    }

    // =========================================================================================================================================================
    // Public methods
    // =========================================================================================================================================================

    /**
     * Returns 'root' node
     */
    getRoot(): BinaryTreeNode<T> {
        return this._root;
    }

    /**
     * Returns node with a given value
     * @param value
     * @param node
     */
    findNode(value: T, node: BinaryTreeNode<T> = null): BinaryTreeNode<T> {

        if (this._root === null) {
            return null;
        }

        if (node === null) {
            node = this.getRoot();
        }

        let result: BinaryTreeNode<T> = null;

        if (node.getValue() === value) {
            result = node;
        }

        if (result === null && node.getLeft() !== null) {
            result = this.findNode(value, node.getLeft());
        }

        if (result === null && node.getRight() !== null) {
            result = this.findNode(value, node.getRight());
        }

        return result;
    }

    /**
     * Inserts new node to tree.
     * @param value
     */
    insert(value: T): void {
        const newNode = new BinaryTreeNode<T>(value);

        if (!this._root || this._root.getValue() === null) {
            this._root = newNode;
            return;
        }

        let current = this._root;

        while (true) {
            if (value === current.getValue()) {
                return;
            }

            if (value < current.getValue()) {
                if (current.getLeft() === null) {
                    current.setLeft(newNode);
                    return;
                }
                current = current.getLeft();
            } else {
                if (current.getRight() === null) {
                    current.setRight(newNode);
                    return;
                }
                current = current.getRight();
            }
        }
    }

    /**
     * Deletes node from tree
     * @param node BinaryTreeNode
     **/
    delete(node: T): void {
        const removeNode = (node: BinaryTreeNode<T>, value: T): BinaryTreeNode<T> => {
            if (!node) {
                return null;
            }

            if (value === node.getValue()) {
                if (!node.getLeft() && !node.getRight()) {
                    return null;
                }

                if (!node.getLeft()) {
                    return node.getRight();
                }

                if (!node.getRight()) {
                    return node.getLeft();
                }

                const temp = this.getMinNode(node.getRight());
                node.setValue(temp.getValue());
                node.setRight(removeNode(node.getRight(), temp.getValue()));
                return node;
            } else if (value < node.getValue()) {
                node.setLeft(removeNode(node.getLeft(), value));
                return node;
            } else {
                node.setRight(removeNode(node.getRight(), value));
                return node;
            }
        };

        this._root = removeNode(this._root, node);
    }

    /**
     * Returns in order traversal
     * @return BinaryTreeNode
     */
    inOrderTraversal(): T[] {
        const result: T[] = [];

        const traverse = (node: BinaryTreeNode<T>): void => {
            if (node.getLeft() !== null && node.getLeft().getValue() !== null) {
                traverse(node.getLeft());
            }
            result.push(node.getValue());
            if (node.getRight() !== null && node.getRight().getValue() !== null) {
                traverse(node.getRight());
            }
        };

        if (this._root !== null && this._root.getValue() !== null) {
            traverse(this._root);
        }

        return result;
    }

    /**
     * Returns pre-order traversal of tree.
     * @return BinaryTreeNode
     */
    preOrderTraversal(): T[] {
        const result: T[] = [];

        const traverse = (node: BinaryTreeNode<T>): void => {
            result.push(node.getValue());
            if (node.getLeft() !== null && node.getLeft().getValue() !== null) {
                traverse(node.getLeft());
            }
            if (node.getRight() !== null && node.getRight().getValue() !== null) {
                traverse(node.getRight());
            }
        };

        if (this._root !== null && this._root.getValue() !== null) {
            traverse(this._root);
        }

        return result;
    }

    /**
     * Returns post-order traversal of tree.
     * @return BinaryTreeNode
     */
    postOrderTraversal(): T[] {
        const result: T[] = [];

        const traverse = (node: BinaryTreeNode<T>): void => {
            if (node.getLeft() !== null && node.getLeft().getValue() !== null) {
                traverse(node.getLeft());
            }
            if (node.getRight() !== null && node.getRight().getValue() !== null) {
                traverse(node.getRight());
            }
            result.push(node.getValue());
        };

        if (this._root !== null && this._root.getValue() !== null) {
            traverse(this._root);
        }

        return result;
    }

     /**
      * Returns level-order traversal of tree.
      * @return BinaryTreeNode
      */
    levelOrderTraversal(): T[] {
        const result: T[] = [];
        const queue: BinaryTreeNode<T>[] = [];

        if (this._root !== null && this._root.getValue() !== null) {
            queue.push(this._root);
        }

        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.getValue());
            if (node.getLeft() !== null && node.getLeft().getValue() !== null) {
                queue.push(node.getLeft());
            }
            if (node.getRight() !== null && node.getRight().getValue() !== null) {
                queue.push(node.getRight());
            }
        }

        return result;
    }

    /**
     * Returns the height of the tree.
     * @return number
     */
    getHeight(): number {
        const getHeightRec = (node: BinaryTreeNode<T>): number => {
            if (node === null || node.getValue() === null) {
                return 0;
            }

            const leftHeight = getHeightRec(node.getLeft());
            const rightHeight = getHeightRec(node.getRight());

            return Math.max(leftHeight, rightHeight) + 1;
        };

        return getHeightRec(this._root);
    }

    /**
     * Returns the depth of the node.
     * @param node
     * @return number
     */
    getDepth(node: BinaryTreeNode<T>): number {
        const getDepthRec = (node: BinaryTreeNode<T>, depth: number): number => {
            if (node === null) {
                return 0;
            }

            if (node === this._root) {
                return 1;
            }

            if (node === this._root.getLeft() || node === this._root.getRight()) {
                return 2;
            }

            const leftDepth = getDepthRec(node.getLeft(), depth + 1);
            const rightDepth = getDepthRec(node.getRight(), depth + 1);

            return leftDepth > rightDepth ? leftDepth : rightDepth;
        };

        return getDepthRec(node, 1);
    }

    /**
     * Returns the min node in tree, if given node is null, returns min node in tree.
     * @param node
     * @return BinaryTreeNode
     */
    getMinNode(node?: BinaryTreeNode<T>): BinaryTreeNode<T> {
        let current = !!node ? node : this._root;
        while (current.getLeft() !== null) {
            current = current.getLeft();
        }
        return current;
    }

    /**
     * Returns the max node in tree, if given node is null, returns max node in tree.
     * @param node
     * @return BinaryTreeNode
     */
    getMaxNode(node?: BinaryTreeNode<T>): BinaryTreeNode<T> {
        let current = !!node ? node : this._root;
        while (current.getRight() !== null) {
            current = current.getRight();
        }
        return current;
    }

    /**
     * Returns an array of nodes in tree.
     * @return T[]
     */
    toArray(): T[] {
        return this.inOrderTraversal();
    }

    /**
     * Enables iteration over tree values in-order.
     */
    public *[Symbol.iterator](): IterableIterator<T> {
        function* traverse(node: BinaryTreeNode<T> | null): IterableIterator<T> {
            if (node === null || node.getValue() === null) {
                return;
            }
            yield* traverse(node.getLeft());
            yield node.getValue();
            yield* traverse(node.getRight());
        }
        yield* traverse(this._root);
    }

    /**
     * Returns a string representation of the tree.
     * @return string
     */
    toString(): string {
        return this.toArray().join(', ');
    }

}
