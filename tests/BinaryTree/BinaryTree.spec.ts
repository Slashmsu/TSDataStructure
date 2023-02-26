import { BinaryTree, BinaryTreeNode } from '../../src';
import { expect } from 'chai';

describe('BinaryTree', () => {
    describe('getRoot()', () => {
        it('should return the root node', () => {
            const tree = new BinaryTree<number>();
            expect(tree.getRoot().getValue()).equal(null);
        });
    });

    describe('findNode()', () => {
        let tree: BinaryTree<number>;

        beforeEach(() => {
            // Create a sample binary tree
            //      10
            //     /  \
            //    5   15
            //   / \
            //  3   8
            const rootNode = new BinaryTreeNode<number>(10);
            rootNode.setLeft(new BinaryTreeNode<number>(5));
            rootNode.setRight(new BinaryTreeNode<number>(15));
            rootNode.getLeft().setLeft(new BinaryTreeNode<number>(3));
            rootNode.getLeft().setRight(new BinaryTreeNode<number>(8));
            tree = new BinaryTree<number>();
            tree['_root'] = rootNode;
        });

        it('should return null if the tree is empty', () => {
            const emptyTree = new BinaryTree<number>();
            expect(emptyTree.findNode(10)).equal(null);
        });

        it('should return the root node if its value matches', () => {
            expect(tree.findNode(10)).equal(tree.getRoot());
        });

        it('should return the correct node if it exists in the tree', () => {
            expect(tree.findNode(3)).equal(tree.getRoot().getLeft().getLeft());
            expect(tree.findNode(8)).equal(tree.getRoot().getLeft().getRight());
            expect(tree.findNode(15)).equal(tree.getRoot().getRight());
        });

        it('should return null if the node does not exist in the tree', () => {
            expect(tree.findNode(20)).equal(null);
        });

        it('should return the first matching node if multiple nodes have the same value', () => {
            const rootNode = new BinaryTreeNode<number>(10);
            rootNode.setLeft(new BinaryTreeNode<number>(10));
            rootNode.getLeft().setLeft(new BinaryTreeNode<number>(10));
            const treeWithDuplicates = new BinaryTree<number>();
            treeWithDuplicates['_root'] = rootNode;
            expect(treeWithDuplicates.findNode(10)).equal(rootNode);
        });

        it('should be able to find a node with a string value', () => {
            const rootNode = new BinaryTreeNode<string>('hello');
            rootNode.setLeft(new BinaryTreeNode<string>('world'));
            const treeWithStrings = new BinaryTree<string>();
            treeWithStrings['_root'] = rootNode;
            expect(treeWithStrings.findNode('hello')).equal(rootNode);
            expect(treeWithStrings.findNode('world')).equal(rootNode.getLeft());
        });
    });

    describe('insert()', () => {
        let tree: BinaryTree<number>;

        beforeEach(() => {
            tree = new BinaryTree<number>();
        });

        it('should insert the root node when the tree is empty', () => {
            tree.insert(10);
            expect(tree.getRoot().getValue()).equal(10);
        });

        it('should insert a new node to the left when the value is less than the root node value', () => {
            tree.insert(10);
            tree.insert(5);

            expect(tree.getRoot().getLeft().getValue()).equal(5);
        });

        it('should insert a new node to the right when the value is greater than the root node value', () => {
            tree.insert(10);
            tree.insert(15);

            expect(tree.getRoot().getRight().getValue()).equal(15);
        });

        it('should not insert a node with the same value as an existing node', () => {
            tree.insert(10);
            tree.insert(10);
            expect(tree.getRoot().getLeft()).equal(null);
            expect(tree.getRoot().getRight()).equal(null);
        });
    });

    describe('delete', () => {
        let tree: BinaryTree<number>;

        beforeEach(() => {
            // Create a sample binary tree
            //      10
            //     /  \
            //    5   15
            //   / \
            //  3   8
            const rootNode = new BinaryTreeNode<number>(10);
            rootNode.setLeft(new BinaryTreeNode<number>(5));
            rootNode.setRight(new BinaryTreeNode<number>(15));
            rootNode.getLeft().setLeft(new BinaryTreeNode<number>(3));
            rootNode.getLeft().setRight(new BinaryTreeNode<number>(8));
            tree = new BinaryTree<number>();
            tree['_root'] = rootNode;
        });

        it('should not do anything if the tree is empty', () => {
            const emptyTree = new BinaryTree<number>();
            emptyTree.delete(10);
            expect(emptyTree.getRoot().getValue()).equal(null);
        });

        it('should remove the root node if it matches the value', () => {
            tree.delete(10);
            expect(tree.getRoot().getValue()).equal(15);
            expect(tree.getRoot().getLeft().getValue()).equal(5);
            expect(tree.getRoot().getRight()).equal(null);
        });

        it('should remove a leaf node if it matches the value', () => {
            tree.delete(8);
            expect(tree.getRoot().getValue()).equal(10);
            expect(tree.getRoot().getLeft().getValue()).equal(5);
            expect(tree.getRoot().getLeft().getLeft().getValue()).equal(3);
            expect(tree.getRoot().getLeft().getRight()).equal(null);
            expect(tree.getRoot().getRight().getValue()).equal(15);
        });

        it('should remove a node with one child if it matches the value', () => {
            tree.delete(5);
            expect(tree.getRoot().getValue()).equal(10);
            expect(tree.getRoot().getLeft().getValue()).equal(8);
            expect(tree.getRoot().getLeft().getLeft().getValue()).equal(3);
            expect(tree.getRoot().getLeft().getRight()).equal(null);
            expect(tree.getRoot().getRight().getValue()).equal(15);
        });

        it('should remove a node with two children if it matches the value', () => {
            tree.delete(5);
            expect(tree.getRoot().getValue()).equal(10);
            expect(tree.getRoot().getLeft().getValue()).equal(8);
            expect(tree.getRoot().getLeft().getLeft().getValue()).equal(3);
            expect(tree.getRoot().getLeft().getRight()).equal(null);
            expect(tree.getRoot().getRight().getValue()).equal(15);
        });

        it('should not do anything if the value does not exist in the tree', () => {
            tree.delete(20);
            expect(tree.getRoot().getValue()).equal(10);
            expect(tree.getRoot().getLeft().getValue()).equal(5);
            expect(tree.getRoot().getLeft().getLeft().getValue()).equal(3);
            expect(tree.getRoot().getLeft().getRight().getValue()).equal(8);
            expect(tree.getRoot().getRight().getValue()).equal(15);
        });
    });

    describe('inOrderTraversal', () => {
        let tree: BinaryTree<number>;

        beforeEach(() => {
            // Create a sample binary tree
            //      10
            //     /  \
            //    5   15
            //   / \
            //  3   8
            const rootNode = new BinaryTreeNode<number>(10);
            rootNode.setLeft(new BinaryTreeNode<number>(5));
            rootNode.setRight(new BinaryTreeNode<number>(15));
            rootNode.getLeft().setLeft(new BinaryTreeNode<number>(3));
            rootNode.getLeft().setRight(new BinaryTreeNode<number>(8));
            tree = new BinaryTree<number>();
            tree['_root'] = rootNode;
        });

        it('should return an empty array for an empty tree', () => {
            const emptyTree = new BinaryTree<number>();
            expect(emptyTree.inOrderTraversal()).to.deep.equal([]);
        });

        it('should return the values in ascending order for a non-empty tree', () => {
            expect(tree.inOrderTraversal()).to.deep.equal([3, 5, 8, 10, 15]);
        });
    });

    describe('preOrderTraversal', () => {
        let tree: BinaryTree<number>;

        beforeEach(() => {
            // Create a sample binary tree
            //      10
            //     /  \
            //    5   15
            //   / \
            //  3   8
            const rootNode = new BinaryTreeNode<number>(10);
            rootNode.setLeft(new BinaryTreeNode<number>(5));
            rootNode.setRight(new BinaryTreeNode<number>(15));
            rootNode.getLeft().setLeft(new BinaryTreeNode<number>(3));
            rootNode.getLeft().setRight(new BinaryTreeNode<number>(8));
            tree = new BinaryTree<number>();
            tree['_root'] = rootNode;
        });

        it('should return an empty array for an empty tree', () => {
            const emptyTree = new BinaryTree<number>();
            expect(emptyTree.preOrderTraversal()).to.deep.equal([]);
        });

        it('should return the values in pre-order for a non-empty tree', () => {
            expect(tree.preOrderTraversal()).to.deep.equal([10, 5, 3, 8, 15]);
        });
    });

    describe('postOrderTraversal', () => {
        let tree: BinaryTree<number>;

        beforeEach(() => {
            // Create a sample binary tree
            //      10
            //     /  \
            //    5   15
            //   / \
            //  3   8
            const rootNode = new BinaryTreeNode<number>(10);
            rootNode.setLeft(new BinaryTreeNode<number>(5));
            rootNode.setRight(new BinaryTreeNode<number>(15));
            rootNode.getLeft().setLeft(new BinaryTreeNode<number>(3));
            rootNode.getLeft().setRight(new BinaryTreeNode<number>(8));
            tree = new BinaryTree<number>();
            tree['_root'] = rootNode;
        });

        it('should return an empty array for an empty tree', () => {
            const emptyTree = new BinaryTree<number>();
            expect(emptyTree.postOrderTraversal()).to.deep.equal([]);
        });

        it('should return the values in post-order for a non-empty tree', () => {
            expect(tree.postOrderTraversal()).to.deep.equal([3, 8, 5, 15, 10]);
        });
    });

    describe('levelOrderTraversal', () => {
        let tree: BinaryTree<number>;

        beforeEach(() => {
            // Create a sample binary tree
            //      10
            //     /  \
            //    5   15
            //   / \
            //  3   8
            const rootNode = new BinaryTreeNode<number>(10);
            rootNode.setLeft(new BinaryTreeNode<number>(5));
            rootNode.setRight(new BinaryTreeNode<number>(15));
            rootNode.getLeft().setLeft(new BinaryTreeNode<number>(3));
            rootNode.getLeft().setRight(new BinaryTreeNode<number>(8));
            tree = new BinaryTree<number>();
            tree['_root'] = rootNode;
        });

        it('should return an empty array for an empty tree', () => {
            const emptyTree = new BinaryTree<number>();
            expect(emptyTree.levelOrderTraversal()).to.deep.equal([]);
        });

        it('should return the values in level-order for a non-empty tree', () => {
            expect(tree.levelOrderTraversal()).to.deep.equal([10, 5, 15, 3, 8]);
        });
    });

    describe('getHeight', () => {
        let tree: BinaryTree<number>;

        beforeEach(() => {
            // Create a sample binary tree
            //      10
            //     /  \
            //    5   15
            //   / \
            //  3   8
            const rootNode = new BinaryTreeNode<number>(10);
            rootNode.setLeft(new BinaryTreeNode<number>(5));
            rootNode.setRight(new BinaryTreeNode<number>(15));
            rootNode.getLeft().setLeft(new BinaryTreeNode<number>(3));
            rootNode.getLeft().setRight(new BinaryTreeNode<number>(8));
            tree = new BinaryTree<number>();
            tree['_root'] = rootNode;
        });

        it('should return 0 for an empty tree', () => {
            const emptyTree = new BinaryTree<number>();
            expect(emptyTree.getHeight()).to.equal(0);
        });

        it('should return 1 for a tree with only the root node and set value', () => {
            const singleNodeTree = new BinaryTree<number>();
            singleNodeTree['_root'] = new BinaryTreeNode<number>(10);
            expect(singleNodeTree.getHeight()).to.equal(1);
        });

        it('should return the height of the tree', () => {
            expect(tree.getHeight()).to.equal(3);
        });
    });

    describe('getDepth', () => {
        let tree: BinaryTree<number>;

        beforeEach(() => {
            // Create a sample binary tree
            //      10
            //     /  \
            //    5   15
            //   / \
            //  3   8
            const rootNode = new BinaryTreeNode<number>(10);
            rootNode.setLeft(new BinaryTreeNode<number>(5));
            rootNode.setRight(new BinaryTreeNode<number>(15));
            rootNode.getLeft().setLeft(new BinaryTreeNode<number>(3));
            rootNode.getLeft().setRight(new BinaryTreeNode<number>(8));
            tree = new BinaryTree<number>();
            tree['_root'] = rootNode;
        });

        it('should return 0 for an empty tree', () => {
            const emptyTree = new BinaryTree<number>();
            expect(emptyTree.getDepth(new BinaryTreeNode<number>(10))).to.equal(0);
        });

        it('should return 1 for the root node of a tree', () => {
            expect(tree.getDepth(tree.getRoot())).to.equal(1);
        });

        it('should return the depth of a node in the tree', () => {
            expect(tree.getDepth(tree.getRoot().getLeft())).to.equal(2);
            expect(tree.getDepth(tree.getRoot().getRight())).to.equal(2);
            expect(tree.getDepth(tree.getRoot().getLeft())).to.equal(2);
            expect(tree.getDepth(tree.getRoot().getLeft().getRight())).to.equal(0);
        });

        it('should return 0 for a node not in the tree', () => {
            expect(tree.getDepth(new BinaryTreeNode<number>(20))).to.equal(0);
        });
    });

    describe('BinaryTree', () => {
        describe('getMinNode()', () => {
            let tree: BinaryTree<number>;

            beforeEach(() => {
                // Create a sample binary tree
                //      10
                //     /  \
                //    5   15
                //   / \
                //  3   8
                const rootNode = new BinaryTreeNode<number>(10);
                rootNode.setLeft(new BinaryTreeNode<number>(5));
                rootNode.setRight(new BinaryTreeNode<number>(15));
                rootNode.getLeft().setLeft(new BinaryTreeNode<number>(3));
                rootNode.getLeft().setRight(new BinaryTreeNode<number>(8));
                tree = new BinaryTree<number>();
                tree['_root'] = rootNode;
            });

            it('should return the node with the minimum value when called with the root node', () => {
                const minNode = tree.getMinNode();
                expect(minNode.getValue()).equal(3);
            });

            it('should return the node with the minimum value when called with a left child node', () => {
                const leftNode = tree.getRoot().getLeft();
                const minNode = tree.getMinNode(leftNode);
                expect(minNode.getValue()).equal(3);
            });

            it('should return the node with the minimum value when called with a right child node', () => {
                const rightNode = tree.getRoot().getRight();
                const minNode = tree.getMinNode(rightNode);
                expect(minNode.getValue()).equal(15);
            });
        });
    });

    describe('getMaxNode()', () => {
        let tree: BinaryTree<number>;

        beforeEach(() => {
            // Create a sample binary tree
            //      10
            //     /  \
            //    5   15
            //   / \
            //  3   8
            const rootNode = new BinaryTreeNode<number>(10);
            rootNode.setLeft(new BinaryTreeNode<number>(5));
            rootNode.setRight(new BinaryTreeNode<number>(15));
            rootNode.getLeft().setLeft(new BinaryTreeNode<number>(3));
            rootNode.getLeft().setRight(new BinaryTreeNode<number>(8));
            tree = new BinaryTree<number>();
            tree['_root'] = rootNode;
        });

        it('should return the max node in the entire tree if no argument is provided', () => {
            expect(tree.getMaxNode().getValue()).equal(15);
        });

        it('should return the max node in the subtree rooted at the provided node', () => {
            const root = tree.getRoot();
            const left = root.getLeft();
            const right = root.getRight();
            expect(tree.getMaxNode(root).getValue()).equal(15);
            expect(tree.getMaxNode(left).getValue()).equal(8);
            expect(tree.getMaxNode(right).getValue()).equal(15);
        });
    });

    describe('BinaryTree', () => {
        describe('toArray()', () => {
            it('should return an empty array for an empty tree', () => {
                const tree = new BinaryTree<number>();
                expect(tree.toArray()).to.deep.equal([]);
            });

            it('should return the values of the nodes in in-order traversal', () => {
                // Create a sample binary tree
                //      10
                //     /  \
                //    5   15
                //   / \
                //  3   8
                const rootNode = new BinaryTreeNode<number>(10);
                rootNode.setLeft(new BinaryTreeNode<number>(5));
                rootNode.setRight(new BinaryTreeNode<number>(15));
                rootNode.getLeft().setLeft(new BinaryTreeNode<number>(3));
                rootNode.getLeft().setRight(new BinaryTreeNode<number>(8));
                const tree = new BinaryTree<number>();
                tree['_root'] = rootNode;

                expect(tree.toArray()).to.deep.equal([3, 5, 8, 10, 15]);
            });
        });
    });

    describe('BinaryTree', () => {
        describe('toString()', () => {
            it('should return a string representation of the tree in order traversal', () => {
                const rootNode = new BinaryTreeNode<number>(10);
                rootNode.setLeft(new BinaryTreeNode<number>(5));
                rootNode.setRight(new BinaryTreeNode<number>(15));
                rootNode.getLeft().setLeft(new BinaryTreeNode<number>(3));
                rootNode.getLeft().setRight(new BinaryTreeNode<number>(8));
                const tree = new BinaryTree<number>();
                tree['_root'] = rootNode;
                expect(tree.toString()).to.equal('3, 5, 8, 10, 15');
            });
        });
    });

});
