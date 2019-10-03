import { LinkedList } from '../../src/List/LinkedList';
import { expect } from 'chai';

describe('LinkedList', () => {

    let linkedList: LinkedList<number>;

    beforeEach(() => {
        linkedList = new LinkedList<number>();
    });

    it('constructor', () => {

        expect(linkedList.getHead()).to.equal(null);
        expect(linkedList.getLast()).to.equal(null);

    });

    it('getHead', () => {

        expect(linkedList.getHead()).to.equal(null);
        linkedList.append(1);

        expect(linkedList.getHead().getValue()).to.equal(1);

    });

    it('isEmpty', () => {
        expect(linkedList.isEmpty()).to.equal(true);

        linkedList.append(1);
        expect(linkedList.isEmpty()).to.equal(false);

    });

    it('size', () => {

        expect(linkedList.size()).to.equal(0);

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        expect(linkedList.size()).to.equal(4);

    });

    it('append', () => {
        linkedList.append(1);

        expect(linkedList.getHead().getValue()).to.equal(1);

        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        expect(linkedList.getLast().getValue()).to.equal(4);

    });

    it('toArray()', () => {

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        expect(linkedList.toArray()).deep.equal([1, 2, 3, 4]);

    });

    it('getLast', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        expect(linkedList.getLast().getValue()).to.equal(4);

    });

});
