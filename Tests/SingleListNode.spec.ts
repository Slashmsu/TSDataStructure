import { ListNode } from "../src/ListNode";

describe('ListNode', () => {

    let singleListNode: ListNode<number>;

    beforeEach(() => {
        singleListNode = new ListNode<number>(1)
    });

    test('constructor', () => {

        expect(singleListNode.getValue()).toEqual(1);
        expect(singleListNode.getNext()).toEqual(null);
    
    });

    test('getNext', () => {

        singleListNode.setNext(new ListNode(2));

        expect(singleListNode.getValue()).toEqual(1);
        expect(singleListNode.getNext().getValue()).toEqual(2);
    
    });

    test('setNext(node, true)', () => {

        singleListNode.setNext(new ListNode(2));

        expect(singleListNode.getNext().getValue()).toEqual(2);
    
    });

    test('setNext(node)', () => {

        singleListNode.setNext(new ListNode(2));

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