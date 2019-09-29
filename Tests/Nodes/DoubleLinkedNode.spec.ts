import { DoubleLinkedNode } from "../../src/Nodes/DoubleLinkedNode";

describe('DoubleLinkedNode', () => {

    let doubleLinkedNode: DoubleLinkedNode<number>;

    beforeEach(() => {
        doubleLinkedNode = new DoubleLinkedNode<number>(1)
    });

    test('constructor', () => {

        expect(doubleLinkedNode.getValue()).toEqual(1);
        expect(doubleLinkedNode.getNext()).toEqual(null);
        expect(doubleLinkedNode.getPrevious()).toEqual(null);
    
    });

    test('getNext', () => {

        doubleLinkedNode.setNext(new DoubleLinkedNode(2));

        expect(doubleLinkedNode.getValue()).toEqual(1);
        expect(doubleLinkedNode.getNext().getValue()).toEqual(2);
    
    });

    test('setNext(node, true)', () => {

        doubleLinkedNode.setNext(new DoubleLinkedNode(2), true);

        expect(doubleLinkedNode.getNext().getValue()).toEqual(2);
        expect(doubleLinkedNode.getNext().getPrevious().getValue()).toEqual(1);
    
    });

    test('setNext(node)', () => {

        doubleLinkedNode.setNext(new DoubleLinkedNode(2));

        expect(doubleLinkedNode.getNext().getValue()).toEqual(2);
        expect(doubleLinkedNode.getNext().getPrevious()).toEqual(null);
    
    });

    test('getValue', () => {
        expect(doubleLinkedNode.getValue()).toEqual(1);
    });

    test('setValue', () => {

        doubleLinkedNode.setValue(13);
        expect(doubleLinkedNode.getValue()).toEqual(13);
    
    });

    test('getPrevious', () => {

        doubleLinkedNode.setNext(new DoubleLinkedNode(2), true);

        expect(doubleLinkedNode.getNext().getPrevious().getValue()).toEqual(1);
    
    });

    test('setPrevious(node, true)', () => {
        
        doubleLinkedNode.setPrevious(new DoubleLinkedNode(2), true);

        expect(doubleLinkedNode.getPrevious().getNext().getValue()).toEqual(1);
    
    });

    test('setPrevious(node)', () => {
        
        doubleLinkedNode.setPrevious(new DoubleLinkedNode(2));

        expect(doubleLinkedNode.getPrevious().getNext()).toEqual(null);
    
    });
    

});