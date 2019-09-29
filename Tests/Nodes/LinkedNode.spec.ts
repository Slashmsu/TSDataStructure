import { LinkedNode } from '../../src/Nodes/LinkedNode';

describe('LinkedNode', () => {

    let linkedNode: LinkedNode<number>;

    beforeEach(() => {
        linkedNode = new LinkedNode<number>(1);
    });

    test('constructor', () => {

        expect(linkedNode.getValue()).toEqual(1);
        expect(linkedNode.getNext()).toEqual(null);

    });

    test('getNext', () => {

        linkedNode.setNext(new LinkedNode(2));

        expect(linkedNode.getValue()).toEqual(1);
        expect(linkedNode.getNext().getValue()).toEqual(2);

    });

    test('setNext(node, true)', () => {

        linkedNode.setNext(new LinkedNode(2));

        expect(linkedNode.getNext().getValue()).toEqual(2);

    });

    test('setNext(node)', () => {

        linkedNode.setNext(new LinkedNode(2));

        expect(linkedNode.getNext().getValue()).toEqual(2);

    });

    test('getValue', () => {
        expect(linkedNode.getValue()).toEqual(1);
    });

    test('setValue', () => {

        linkedNode.setValue(13);
        expect(linkedNode.getValue()).toEqual(13);

    });

});
