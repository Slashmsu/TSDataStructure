export class AVLTreeNode<T> {
    private value: T;
    private left: AVLTreeNode<T> | null = null;
    private right: AVLTreeNode<T> | null = null;
    private height: number = 1;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(val: T): void {
        this.value = val;
    }

    getLeft(): AVLTreeNode<T> | null {
        return this.left;
    }

    setLeft(node: AVLTreeNode<T> | null): void {
        this.left = node;
    }

    getRight(): AVLTreeNode<T> | null {
        return this.right;
    }

    setRight(node: AVLTreeNode<T> | null): void {
        this.right = node;
    }

    getHeight(): number {
        return this.height;
    }

    setHeight(h: number): void {
        this.height = h;
    }
}

export class AVLTree<T> {
    private root: AVLTreeNode<T> | null = null;

    getRoot(): AVLTreeNode<T> | null {
        return this.root;
    }

    insert(value: T): void {
        this.root = this.insertNode(this.root, value);
    }

    contains(value: T): boolean {
        return this.findNode(this.root, value) !== null;
    }

    toArray(): T[] {
        const result: T[] = [];
        this.inOrder(this.root, result);
        return result;
    }

    /**
     * Enables iteration over the tree values in-order.
     */
    public *[Symbol.iterator](): IterableIterator<T> {
        function* traverse(node: AVLTreeNode<T> | null): IterableIterator<T> {
            if (node === null) {
                return;
            }
            yield* traverse(node.getLeft());
            yield node.getValue();
            yield* traverse(node.getRight());
        }
        yield* traverse(this.root);
    }

    private insertNode(node: AVLTreeNode<T> | null, value: T): AVLTreeNode<T> {
        if (node === null) {
            return new AVLTreeNode<T>(value);
        }

        if (value < node.getValue()) {
            node.setLeft(this.insertNode(node.getLeft(), value));
        } else if (value > node.getValue()) {
            node.setRight(this.insertNode(node.getRight(), value));
        } else {
            return node; // no duplicates
        }

        this.updateHeight(node);
        return this.balance(node);
    }

    private findNode(node: AVLTreeNode<T> | null, value: T): AVLTreeNode<T> | null {
        if (node === null) {
            return null;
        }
        if (value === node.getValue()) {
            return node;
        }
        if (value < node.getValue()) {
            return this.findNode(node.getLeft(), value);
        }
        return this.findNode(node.getRight(), value);
    }

    private inOrder(node: AVLTreeNode<T> | null, arr: T[]): void {
        if (node === null) {
            return;
        }
        this.inOrder(node.getLeft(), arr);
        arr.push(node.getValue());
        this.inOrder(node.getRight(), arr);
    }

    private heightOf(node: AVLTreeNode<T> | null): number {
        return node ? node.getHeight() : 0;
    }

    private updateHeight(node: AVLTreeNode<T>): void {
        node.setHeight(Math.max(this.heightOf(node.getLeft()), this.heightOf(node.getRight())) + 1);
    }

    private balanceFactor(node: AVLTreeNode<T>): number {
        return this.heightOf(node.getLeft()) - this.heightOf(node.getRight());
    }

    private balance(node: AVLTreeNode<T>): AVLTreeNode<T> {
        const balance = this.balanceFactor(node);

        if (balance > 1) {
            if (this.balanceFactor(node.getLeft()) < 0) {
                node.setLeft(this.rotateLeft(node.getLeft()));
            }
            return this.rotateRight(node);
        }

        if (balance < -1) {
            if (this.balanceFactor(node.getRight()) > 0) {
                node.setRight(this.rotateRight(node.getRight()));
            }
            return this.rotateLeft(node);
        }

        return node;
    }

    private rotateLeft(x: AVLTreeNode<T>): AVLTreeNode<T> {
        const y = x.getRight();
        if (!y) {
            return x;
        }
        const T2 = y.getLeft();

        y.setLeft(x);
        x.setRight(T2);

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    private rotateRight(y: AVLTreeNode<T>): AVLTreeNode<T> {
        const x = y.getLeft();
        if (!x) {
            return y;
        }
        const T2 = x.getRight();

        x.setRight(y);
        y.setLeft(T2);

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }
}
