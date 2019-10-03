import { LinkedNode } from '../../src/Nodes/LinkedNode';
import { expect } from 'chai';

describe('LinkedNode', () => {

    let linkedNode: LinkedNode<number>;

    beforeEach(() => {
        linkedNode = new LinkedNode<number>(1);
    });

    it('constructor', () => {

        expect(linkedNode.getValue()).to.equal(1);
        expect(linkedNode.getNext()).to.equal(null);

    });

    it('getNext', () => {

        linkedNode.setNext(new LinkedNode(2));

        expect(linkedNode.getValue()).to.equal(1);
        expect(linkedNode.getNext().getValue()).to.equal(2);

    });

    it('setNext(node, true)', () => {

        linkedNode.setNext(new LinkedNode(2));

        expect(linkedNode.getNext().getValue()).to.equal(2);

    });

    it('setNext(node)', () => {

        linkedNode.setNext(new LinkedNode(2));

        expect(linkedNode.getNext().getValue()).to.equal(2);

    });

    it('getValue', () => {
        expect(linkedNode.getValue()).to.equal(1);
    });

    it('setValue', () => {

        linkedNode.setValue(13);
        expect(linkedNode.getValue()).to.equal(13);

    });

});
