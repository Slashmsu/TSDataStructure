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

    it('insert as first item', () => {
        doubleLinkedList.append(1);
        doubleLinkedList.append(2);
        doubleLinkedList.append(3);
        doubleLinkedList.append(4);

        doubleLinkedList.insertFirst(0);
        expect(doubleLinkedList.getHead().getValue()).equal(0);
    });

    it('insert as last item', () => {
        doubleLinkedList.append(1);
        doubleLinkedList.append(2);
        doubleLinkedList.append(3);
        doubleLinkedList.append(4);

        doubleLinkedList.insertLast(5);
        expect(doubleLinkedList.getLast().getValue()).equal(5);
    });

    it('get item by position', () => {
        doubleLinkedList.append(1);
        doubleLinkedList.append(2);
        doubleLinkedList.append(3);
        doubleLinkedList.append(4);

        expect(doubleLinkedList.get(1).getValue()).equal(2);
    });

    it('get item by position - out of the range', () => {
        doubleLinkedList.append(1);
        doubleLinkedList.append(2);
        doubleLinkedList.append(3);
        doubleLinkedList.append(4);

        expect(() => doubleLinkedList.get(5)).to.throw(Error);
    });

    it('get item by position - doubleLinkedList is empty', () => {
        expect(doubleLinkedList.get(10)).equal(null);
    });

    it('inserts value after third element', () => {
        doubleLinkedList.append(1);
        doubleLinkedList.append(2);
        doubleLinkedList.append(3);
        doubleLinkedList.append(4);

        doubleLinkedList.insert(3, 16);
        expect(doubleLinkedList.get(2).getValue()).equal(3);
        expect(doubleLinkedList.get(3).getValue()).equal(16);
        expect(doubleLinkedList.get(4).getValue()).equal(4);
    });

});
