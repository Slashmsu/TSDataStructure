export class BinaryTreeNode<T> {

    private _value:  T;
    private _left:   BinaryTreeNode<T>;
    private _right:  BinaryTreeNode<T>;

    constructor(value: T = null) {
        this._value = value;
        this._left = null;
        this._right = null;
    }

    getValue(): T {
        return this._value;
    }

    setValue(value: T) {
        this._value = value;
    }

    getLeft(): BinaryTreeNode<T> {
        return this._left;
    }

    setLeft(value: T) {
        this._left = new BinaryTreeNode<T>(value);
    }

    getRight(): BinaryTreeNode<T> {
        return this._right;
    }

    setRight(value: T) {
        this._right = new BinaryTreeNode<T>(value);
    }

    append(value: T) {
        if (this.getLeft() === null) {
            this.setLeft(value);
        } else {
            this.setRight(value);
        }
    }

}
