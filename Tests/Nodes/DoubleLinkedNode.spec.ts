import { DoubleLinkedNode } from '../../src/Nodes/DoubleLinkedNode';
import { expect } from 'chai';

describe('DoubleLinkedNode', () => {

    let doubleLinkedNode: DoubleLinkedNode<number>;

    beforeEach(() => {
        doubleLinkedNode = new DoubleLinkedNode<number>(1);
    });

    it('constructor', () => {

        expect(doubleLinkedNode.getValue()).to.equal(1);
        expect(doubleLinkedNode.getNext()).to.equal(null);
        expect(doubleLinkedNode.getPrevious()).to.equal(null);

    });

    it('getNext', () => {

        doubleLinkedNode.setNext(new DoubleLinkedNode(2));

        expect(doubleLinkedNode.getValue()).to.equal(1);
        expect(doubleLinkedNode.getNext().getValue()).to.equal(2);

    });

    it('setNext(node, true)', () => {

        doubleLinkedNode.setNext(new DoubleLinkedNode(2), true);

        expect(doubleLinkedNode.getNext().getValue()).to.equal(2);
        expect(doubleLinkedNode.getNext().getPrevious().getValue()).to.equal(1);

    });

    it('setNext(node)', () => {

        doubleLinkedNode.setNext(new DoubleLinkedNode(2));

        expect(doubleLinkedNode.getNext().getValue()).to.equal(2);
        expect(doubleLinkedNode.getNext().getPrevious()).to.equal(null);

    });

    it('getValue', () => {
        expect(doubleLinkedNode.getValue()).to.equal(1);
    });

    it('setValue', () => {

        doubleLinkedNode.setValue(13);
        expect(doubleLinkedNode.getValue()).to.equal(13);

    });

    it('getPrevious', () => {

        doubleLinkedNode.setNext(new DoubleLinkedNode(2), true);

        expect(doubleLinkedNode.getNext().getPrevious().getValue()).to.equal(1);

    });

    it('setPrevious(node, true)', () => {

        doubleLinkedNode.setPrevious(new DoubleLinkedNode(2), true);

        expect(doubleLinkedNode.getPrevious().getNext().getValue()).to.equal(1);

    });

    it('setPrevious(node)', () => {

        doubleLinkedNode.setPrevious(new DoubleLinkedNode(2));

        expect(doubleLinkedNode.getPrevious().getNext()).to.equal(null);

    });

});
