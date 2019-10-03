import { LinkedList } from '../../src/List/LinkedList';
import { expect } from 'chai';

describe('LinkedList', () => {

    let linkedList: LinkedList<number>;

    beforeEach(() => {
        linkedList = new LinkedList<number>();
    });

    it('constructor', () => {

        expect(linkedList.getHead()).equal(null);
        expect(linkedList.getLast()).equal(null);

    });

    it('getHead', () => {

        expect(linkedList.getHead()).equal(null);
        linkedList.append(1);

        expect(linkedList.getHead().getValue()).equal(1);

    });

    it('isEmpty', () => {
        expect(linkedList.isEmpty()).equal(true);

        linkedList.append(1);
        expect(linkedList.isEmpty()).equal(false);

    });

    it('size', () => {

        expect(linkedList.size()).equal(0);

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        expect(linkedList.size()).equal(4);

    });

    it('append', () => {
        linkedList.append(1);

        expect(linkedList.getHead().getValue()).equal(1);

        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        expect(linkedList.getLast().getValue()).equal(4);

    });

    it('toArray()', () => {

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        expect(linkedList.toArray()).to.deep.equal([1, 2, 3, 4]);

    });

    it('getLast', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        expect(linkedList.getLast().getValue()).equal(4);

    });

});
