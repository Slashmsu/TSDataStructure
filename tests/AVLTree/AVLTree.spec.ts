import { expect } from 'chai';
import { AVLTree } from '../../src/AVLTree/AVLTree';

describe('AVLTree', () => {
    it('should keep tree balanced for ascending inserts', () => {
        const tree = new AVLTree<number>();
        tree.insert(1);
        tree.insert(2);
        tree.insert(3);

        const root = tree.getRoot();
        expect(root.getValue()).to.equal(2);
        expect(root.getLeft().getValue()).to.equal(1);
        expect(root.getRight().getValue()).to.equal(3);
    });

    it('should contain inserted values', () => {
        const tree = new AVLTree<number>();
        [10, 5, 15, 3, 8].forEach(v => tree.insert(v));
        expect(tree.contains(8)).to.be.true;
        expect(tree.contains(100)).to.be.false;
    });

    it('toArray should return values in order', () => {
        const tree = new AVLTree<number>();
        [4, 2, 6, 1, 3, 5, 7].forEach(v => tree.insert(v));
        expect(tree.toArray()).to.deep.equal([1,2,3,4,5,6,7]);
    });

    it('should be iterable with for-of', () => {
        const tree = new AVLTree<number>();
        [3,1,4].forEach(v => tree.insert(v));
        const result: number[] = [];
        for (const v of tree) {
            result.push(v);
        }
        expect(result).to.deep.equal([1,3,4]);
    });
});
