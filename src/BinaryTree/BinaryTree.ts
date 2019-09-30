import { BinaryTreeNode } from '../Nodes/BinaryTreeNode';

export class BinaryTree<T> {

    private _root: BinaryTreeNode<T>;

    constructor(value: T) {
        this._root = new BinaryTreeNode(value);
    }

    getRoot(): BinaryTreeNode<T> {
        return this._root;
    }

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

}
