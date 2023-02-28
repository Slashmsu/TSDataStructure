import { TreeNode } from '../../src/TreeNode/TreeNode';
import { expect } from 'chai';
import { isEqual } from 'lodash';

describe('TreeNode', () => {

    describe('getValue', () => {
        it('should return the value of the node', () => {
            const node = new TreeNode('hello');
            expect(node.getValue()).equal('hello');
        });
    });

    describe('setValue', () => {
        it('should set the value of the node', () => {
            const node = new TreeNode('hello');
            node.setValue('world');
            expect(node.getValue()).equal('world');
        });
    });

    describe('getParent', () => {
        it('should return the parent of the node', () => {
            const parent = new TreeNode('parent');
            const child = new TreeNode('child');
            child.setParent(parent);
            expect(child.getParent()).equal(parent);
        });
    });

    describe('setParent', () => {
        it('should set the parent of the node', () => {
            const parent = new TreeNode('parent');
            const child = new TreeNode('child');
            child.setParent(parent);
            expect(child.getParent()).equal(parent);

            const newParent = new TreeNode('new parent');
            child.setParent(newParent);
            expect(child.getParent()).equal(newParent);
        });
    });

    describe('getChildren', () => {
        it('should return the children of the node', () => {
            const parent = new TreeNode('parent');
            const child1 = new TreeNode('child 1');
            const child2 = new TreeNode('child 2');
            parent.addChild(child1);
            parent.addChild(child2);
            expect(isEqual(parent.getChildren(), [child1, child2])).equal(true);

        });
    });

    describe('addChild', () => {
        it('should add a child to the node', () => {
            const parent = new TreeNode('parent');
            const child = new TreeNode('child');
            parent.addChild(child);
            expect(isEqual(parent.getChildren(), [child])).equal(true);
            expect(isEqual(child.getParent(), parent)).equal(true);
        });
    });

    describe('removeChild', () => {
        it('should remove a child from the node', () => {
            const parent = new TreeNode('parent');
            const child1 = new TreeNode('child 1');
            const child2 = new TreeNode('child 2');
            parent.addChild(child1);
            parent.addChild(child2);
            parent.removeChild(child1);
            expect(isEqual(parent.getChildren(), [child2])).equal(true);
            expect(child1.getParent()).equal(null);
        });

        it('should do nothing if the child is not a child of the node', () => {
            const parent = new TreeNode('parent');
            const child = new TreeNode('child');
            parent.removeChild(child);
            expect(isEqual(parent.getChildren(), [])).equal(true);
            expect(child.getParent()).equal(null);
        });
    });

    describe('isLeaf', () => {
        it('should return true if the node is a leaf', () => {
            const node = new TreeNode('node');
            expect(node.isLeaf()).equal(true);
        });

        it('should return false if the node is not a leaf', () => {
            const parent = new TreeNode('parent');
            const child = new TreeNode('child');
            parent.addChild(child);
            expect(parent.isLeaf()).equal(false);
        });
    });

    describe('getHeight', () => {
        it('should return 0 for a leaf node', () => {
            const node = new TreeNode('node');
            expect(node.getHeight()).equal(0);
        });

        it('should return the height of the node', () => {
            const parent = new TreeNode('parent');
            const child1 = new TreeNode('child 1');
            const child2 = new TreeNode('child 2');
            const grandchild1 = new TreeNode('grandchild 1');
            const grandchild2 = new TreeNode('grandchild 2');
            const grandchild3 = new TreeNode('grandchild 3');
            const grandchild4 = new TreeNode('grandchild 4');
            parent.addChild(child1);
            parent.addChild(child2);
            child1.addChild(grandchild1);
            child1.addChild(grandchild2);
            child2.addChild(grandchild3);
            child2.addChild(grandchild4);
            expect(parent.getHeight()).equal(2);
            expect(child1.getHeight()).equal(1);
            expect(child2.getHeight()).equal(1);
            expect(grandchild1.getHeight()).equal(0);
            expect(grandchild2.getHeight()).equal(0);
            expect(grandchild3.getHeight()).equal(0);
            expect(grandchild4.getHeight()).equal(0);
        });
    });

    describe('getDepth', () => {
        it('should return 0 for the root node', () => {
            const rootNode = new TreeNode('root');
            expect(rootNode.getDepth()).equal(0);
        });

        it('should return 1 for a child node', () => {
            const rootNode = new TreeNode('root');
            const childNode = new TreeNode('child');
            rootNode.addChild(childNode);
            expect(childNode.getDepth()).equal(1);
        });

        it('should return the correct depth for a grandchild node', () => {
            const rootNode = new TreeNode('root');
            const childNode = new TreeNode('child');
            const grandchildNode = new TreeNode('grandchild');
            rootNode.addChild(childNode);
            childNode.addChild(grandchildNode);
            expect(grandchildNode.getDepth()).equal(2);
        });
    });

    describe('traversePreorder', () => {
        it('should apply the callback function to each node in preorder', () => {
            const rootNode = new TreeNode('root');
            const childNode1 = new TreeNode('child1');
            const childNode2 = new TreeNode('child2');
            rootNode.addChild(childNode1);
            rootNode.addChild(childNode2);

            const visitedNodes: TreeNode<string>[] = [];
            const callback = (node: TreeNode<string>) => visitedNodes.push(node);
            rootNode.traversePreorder(callback);

            const expectedNodes = [rootNode, childNode1, childNode2];
            expect(isEqual(visitedNodes, expectedNodes)).equal(true);
        });
    });

    describe('traversePostorder', () => {
        it('should apply the callback function to each node in postorder', () => {
            const rootNode = new TreeNode('root');
            const childNode1 = new TreeNode('child1');
            const childNode2 = new TreeNode('child2');
            rootNode.addChild(childNode1);
            rootNode.addChild(childNode2);

            const visitedNodes: TreeNode<string>[] = [];
            const callback = (node: TreeNode<string>) => visitedNodes.push(node);
            rootNode.traversePostorder(callback);

            const expectedNodes = [childNode1, childNode2, rootNode];
            expect(isEqual(visitedNodes, expectedNodes)).equal(true);
        });
    });

    describe('traverseInorder', () => {
        it('should apply the callback function to each node in inorder', () => {
            const rootNode = new TreeNode('root');
            const childNode1 = new TreeNode('child1');
            const childNode2 = new TreeNode('child2');
            rootNode.addChild(childNode1);
            rootNode.addChild(childNode2);

            const visitedNodes: TreeNode<string>[] = [];
            const callback = (node: TreeNode<string>) => visitedNodes.push(node);
            rootNode.traverseInorder(callback);

            const expectedNodes = [childNode1, rootNode, childNode2];
            expect(isEqual(visitedNodes, expectedNodes)).to.be.true;
        });
    });

    describe('traverseLevelOrder', () => {
        it('should apply the callback function to each node level by level', () => {
            const rootNode = new TreeNode('root');
            const childNode1 = new TreeNode('child1');
            const childNode2 = new TreeNode('child2');
            const grandchildNode1 = new TreeNode('grandchild1');
            const grandchildNode2 = new TreeNode('grandchild2');
            const grandchildNode3 = new TreeNode('grandchild3');
            rootNode.addChild(childNode1);
            rootNode.addChild(childNode2);
            childNode1.addChild(grandchildNode1);
            childNode1.addChild(grandchildNode2);
            childNode2.addChild(grandchildNode3);

            const visitedNodes: TreeNode<string>[] = [];
            const callback = (node: TreeNode<string>) => visitedNodes.push(node);
            rootNode.traverseLevelOrder(callback);

            const expectedNodes = [rootNode, childNode1, childNode2, grandchildNode1, grandchildNode2, grandchildNode3];
            expect(isEqual(visitedNodes, expectedNodes)).to.be.true;
        });
    });

});
