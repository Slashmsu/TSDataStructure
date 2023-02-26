import { BinaryTree, BinaryTreeNode } from '../../src';
import { expect } from 'chai';

describe('BinaryTree', () => {
    describe('getRoot()', () => {
        it('should return the root node', () => {
            const tree = new BinaryTree<number>(10);
            expect(tree.getRoot().getValue()).equal(10);
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
            rootNode.setLeft(5);
            rootNode.setRight(15);
            rootNode.getLeft().setLeft(3);
            rootNode.getLeft().setRight(8);
            tree = new BinaryTree<number>(null);
            tree['_root'] = rootNode;
        });

        it('should return null if the tree is empty', () => {
            const emptyTree = new BinaryTree<number>(null);
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
            rootNode.setLeft(10);
            rootNode.getLeft().setLeft(10);
            const treeWithDuplicates = new BinaryTree<number>(null);
            treeWithDuplicates['_root'] = rootNode;
            expect(treeWithDuplicates.findNode(10)).equal(rootNode);
        });

        it('should be able to find a node with a string value', () => {
            const rootNode = new BinaryTreeNode<string>('hello');
            rootNode.setLeft('world');
            const treeWithStrings = new BinaryTree<string>(null);
            treeWithStrings['_root'] = rootNode;
            expect(treeWithStrings.findNode('hello')).equal(rootNode);
            expect(treeWithStrings.findNode('world')).equal(rootNode.getLeft());
        });
    });
});
