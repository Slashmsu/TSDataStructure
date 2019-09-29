import { LinkedNode } from "../../src/Nodes/LinkedNode";

describe('LinkedNode', () => {

    let singleListNode: LinkedNode<number>;

    beforeEach(() => {
        singleListNode = new LinkedNode<number>(1)
    });

    test('constructor', () => {

        expect(singleListNode.getValue()).toEqual(1);
        expect(singleListNode.getNext()).toEqual(null);
    
    });

    test('getNext', () => {

        singleListNode.setNext(new LinkedNode(2));

        expect(singleListNode.getValue()).toEqual(1);
        expect(singleListNode.getNext().getValue()).toEqual(2);
    
    });

    test('setNext(node, true)', () => {

        singleListNode.setNext(new LinkedNode(2));

        expect(singleListNode.getNext().getValue()).toEqual(2);
    
    });

    test('setNext(node)', () => {

        singleListNode.setNext(new LinkedNode(2));

        expect(singleListNode.getNext().getValue()).toEqual(2);
    
    });

    test('getValue', () => {
        expect(singleListNode.getValue()).toEqual(1);
    });

    test('setValue', () => {

        singleListNode.setValue(13);
        expect(singleListNode.getValue()).toEqual(13);
    
    });

});