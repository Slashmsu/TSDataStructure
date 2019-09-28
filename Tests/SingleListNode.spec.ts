import { SingleListNode } from "../src/SingleListNode";

describe('SingleLinkedList', () => {

    let singleListNode: SingleListNode<number>;

    beforeEach(() => {
        singleListNode = new SingleListNode<number>(1)
    });

    test('constructor', () => {

        expect(singleListNode.getValue()).toEqual(1);
        expect(singleListNode.getNext()).toEqual(null); 
    
    });

    test('getNext', () => {

        singleListNode.setNext(new SingleListNode(2));

        expect(singleListNode.getValue()).toEqual(1);
        expect(singleListNode.getNext().getValue()).toEqual(2);  
    
    });

    test('setNext(node, true)', () => {

        singleListNode.setNext(new SingleListNode(2));

        expect(singleListNode.getNext().getValue()).toEqual(2);  
    
    });

    test('setNext(node)', () => {

        singleListNode.setNext(new SingleListNode(2));

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