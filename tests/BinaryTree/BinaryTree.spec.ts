import { BinaryTree } from '../../src/BinaryTree/BinaryTree';
import { expect } from 'chai';

describe('BinaryTree', () => {

    let binaryTree: BinaryTree<number>;

    it('append', () => {
        binaryTree = new BinaryTree<number>(1);
        binaryTree.getRoot().append(2);
        binaryTree.getRoot().append(3);

        binaryTree.getRoot().getLeft().append(4);
        binaryTree.getRoot().getLeft().append(5);

        binaryTree.getRoot().getRight().setLeft(6);
        binaryTree.getRoot().getRight().setRight(7);

        expect(binaryTree.getRoot().getValue()).to.equal(1);

        expect(binaryTree.getRoot().getLeft().getValue()).to.equal(2);
        expect(binaryTree.getRoot().getRight().getValue()).to.equal(3);

        expect(binaryTree.getRoot().getLeft().getLeft().getValue()).to.equal(4);
        expect(binaryTree.getRoot().getLeft().getRight().getValue()).to.equal(5);

    });

    it('findNode', () => {

        expect(binaryTree.findNode(6).getValue()).to.equal(6);
        expect(binaryTree.findNode(8)).to.equal(null);

    });

});
