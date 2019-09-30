import { BinaryTree } from '../../src/BinaryTree/BinaryTree';

describe('BinaryTree', () => {

    let binaryTree: BinaryTree<number>;

    test('append', () => {
        binaryTree = new BinaryTree<number>(1);
        binaryTree.getRoot().append(2);
        binaryTree.getRoot().append(3);

        binaryTree.getRoot().getLeft().append(4);
        binaryTree.getRoot().getLeft().append(5);

        binaryTree.getRoot().getRight().append(6);
        binaryTree.getRoot().getRight().append(6);

        expect(binaryTree.getRoot().getValue()).toEqual(1);

        expect(binaryTree.getRoot().getLeft().getValue()).toEqual(2);
        expect(binaryTree.getRoot().getRight().getValue()).toEqual(3);

        expect(binaryTree.getRoot().getLeft().getLeft().getValue()).toEqual(4);
        expect(binaryTree.getRoot().getLeft().getRight().getValue()).toEqual(5);

    });

    test('findNode', () => {

        expect(binaryTree.findNode(6).getValue()).toEqual(6);
        expect(binaryTree.findNode(8)).toEqual(null);

    });

});
