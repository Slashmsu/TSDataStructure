import { expect } from 'chai';
import { isEqual } from 'lodash';
import { Tree } from '../../src/Tree';

describe('Tree', () => {
    let tree: Tree<number>;

    beforeEach(() => {
        tree = new Tree<number>(1);
    });

    describe('addChild', () => {
        it('should add a child node to a parent node', () => {
            const rootNode = tree.getRoot();
            const childNode = tree.addChild(rootNode, 2);
            expect(childNode.getValue()).to.equal(2);
            expect(rootNode.getChildren()).to.deep.equal([childNode]);
        });
    });

    describe('removeNode', () => {
        it('should remove a node and all of its children from the tree', () => {
            const rootNode = tree.getRoot();
            const childNode1 = tree.addChild(rootNode, 2);
            const childNode2 = tree.addChild(rootNode, 3);
            tree.addChild(childNode1, 4);
            const grandChildNode2 = tree.addChild(childNode2, 5);

            tree.removeNode(childNode1);

            expect(isEqual(tree.getRoot(), rootNode)).to.be.true;
            expect(rootNode.getChildren()).to.deep.equal([childNode2]);
            expect(childNode2.getChildren()).to.deep.equal([grandChildNode2]);
        });

        it('should remove the root node if it is the only node in the tree', () => {
            tree.removeNode(tree.getRoot());

            expect(tree.isEmpty()).to.be.true;
        });
    });

    describe('size', () => {
        it('should return the number of nodes in the tree', () => {
            const rootNode = tree.getRoot();
            const childNode1 = tree.addChild(rootNode, 2);
            const childNode2 = tree.addChild(rootNode, 3);
            tree.addChild(childNode1, 4);
            tree.addChild(childNode2, 5);

            expect(tree.size()).to.equal(5);
        });
    });

    describe('isEmpty', () => {
        it('should return true if the tree is empty', () => {
            tree.removeNode(tree.getRoot());

            expect(tree.isEmpty()).to.be.true;
        });

        it('should return false if the tree is not empty', () => {
            expect(tree.isEmpty()).to.be.false;
        });
    });

    describe('traverseLevelOrder', () => {
        it('should traverse the tree in breadth-first order and apply the given callback function to each node', () => {
            const rootNode = tree.getRoot();
            const childNode1 = tree.addChild(rootNode, 2);
            const childNode2 = tree.addChild(rootNode, 3);
            tree.addChild(childNode1, 4);
            tree.addChild(childNode2, 5);

            const visitedNodes: number[] = [];
            tree.traverseLevelOrder((node) => {
                visitedNodes.push(node.getValue());
            });

            expect(visitedNodes).to.deep.equal([1, 2, 3, 4, 5]);
        });
    });
});
