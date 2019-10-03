import { DoubleLinkedList } from '../../src/List/DoubleLinkedList';
import { expect } from 'chai';

describe('DoubleLinkedList', () => {

    let doubleLinkedList: DoubleLinkedList<number>;

    beforeEach(() => {
        doubleLinkedList = new DoubleLinkedList<number>();
    });

    it('constructor', () => {

        expect(doubleLinkedList.getHead()).equal(null);
        expect(doubleLinkedList.getLast()).equal(null);

    });

    it('getHead', () => {

        expect(doubleLinkedList.getHead()).equal(null);
        doubleLinkedList.append(1);

        expect(doubleLinkedList.getHead().getValue()).equal(1);

    });

    it('isEmpty', () => {
        expect(doubleLinkedList.isEmpty()).equal(true);

        doubleLinkedList.append(1);
        expect(doubleLinkedList.isEmpty()).equal(false);

    });

    it('size', () => {

        expect(doubleLinkedList.size()).equal(0);

        doubleLinkedList.append(1);
        doubleLinkedList.append(2);
        doubleLinkedList.append(3);
        doubleLinkedList.append(4);

        expect(doubleLinkedList.size()).equal(4);

        doubleLinkedList.getLast().getPrevious().setNext(null);
        expect(doubleLinkedList.size()).equal(3);

    });

    it('append', () => {
        doubleLinkedList.append(1);

        expect(doubleLinkedList.getHead().getValue()).equal(1);

        doubleLinkedList.append(2);
        doubleLinkedList.append(3);

        const someNode = doubleLinkedList.getLast().getPrevious();

        expect(someNode.getPrevious().getValue()).equal(1);

        expect(someNode.getNext().getValue()).equal(3);

        doubleLinkedList.append(4);

        expect(doubleLinkedList.getLast().getValue()).equal(4);

    });

    it('toArray()', () => {

        doubleLinkedList.append(1);
        doubleLinkedList.append(2);
        doubleLinkedList.append(3);
        doubleLinkedList.append(4);
        expect(doubleLinkedList.toArray()).to.deep.equal([1, 2, 3, 4]);

    });

    it('getLast', () => {
        doubleLinkedList.append(1);
        doubleLinkedList.append(2);
        doubleLinkedList.append(3);
        doubleLinkedList.append(4);

        expect(doubleLinkedList.getLast().getValue()).equal(4);
    });

});
