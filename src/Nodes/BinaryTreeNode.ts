export class BinaryTreeNode<T> {

    private _value:  T;
    private _left:   BinaryTreeNode<T>;
    private _right:  BinaryTreeNode<T>;

    constructor(value: T = null) {
        this._value = value;
        this._left = null;
        this._right = null;
    }

    /**
     * Returns node's value
     */
    getValue(): T {
        return this._value;
    }

    /**
     * Sets value to node
     * @param value
     */
    setValue(value: T) {
        this._value = value;
    }

    /**
     * Return left node
     */
    getLeft(): BinaryTreeNode<T> {
        return this._left;
    }

    /**
     * Sets left node
     * @param node
     */
    setLeft(node: BinaryTreeNode<T>) {
        this._left = node;
    }

    /**
     * Return right node
     */
    getRight(): BinaryTreeNode<T> {
        return this._right;
    }

    /**
     * Sets right node
     * @param node BinaryTreeNode
     */
    setRight(node: BinaryTreeNode<T>) {
        this._right = node;
    }

    /**
     * If append node to current node, if left node doesn't exists, sets left node,
     * otherwise sets right node, if both nodes are set doesn't anything
     * @param node BinaryTreeNode
     */
    append(node: BinaryTreeNode<T>) {
        if (this.getLeft() === null) {
            this.setLeft(node);
        } else if (this.getRight() === null) {
            this.setRight(node);
        }
    }

}
