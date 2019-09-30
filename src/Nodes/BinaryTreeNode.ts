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
     * @param value
     */
    setLeft(value: T) {
        this._left = new BinaryTreeNode<T>(value);
    }

    /**
     * Return right node
     */
    getRight(): BinaryTreeNode<T> {
        return this._right;
    }

    /**
     * Sets right node
     * @param value
     */
    setRight(value: T) {
        this._right = new BinaryTreeNode<T>(value);
    }

    /**
     * If append node to current node, if left node doesn't exists, sets left node,
     * otherwise sets right node, if both nodes are set doesn't anything
     * @param value
     */
    append(value: T) {
        if (this.getLeft() === null) {
            this.setLeft(value);
        } else if (this.getRight() === null) {
            this.setRight(value);
        }
    }

}
