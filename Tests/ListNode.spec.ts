import { ListNode } from "../src/ListNode";

describe('LinkedList', () => {

    let listNode: ListNode<number>;

    beforeEach(() => {
        listNode = new ListNode<number>(1)
    });

    test('constructor', () => {

        expect(listNode.getValue()).toEqual(1);
        expect(listNode.getNext()).toEqual(null); 
        expect(listNode.getPrevious()).toEqual(null);
    
    });

    test('getNext', () => {

        listNode.setNext(new ListNode(2));

        expect(listNode.getValue()).toEqual(1);
        expect(listNode.getNext().getValue()).toEqual(2);  
    
    });

    test('setNext(node, true)', () => {

        listNode.setNext(new ListNode(2), true);

        expect(listNode.getNext().getValue()).toEqual(2);  
        expect(listNode.getNext().getPrevious().getValue()).toEqual(1);  
    
    });

    test('setNext(node)', () => {

        listNode.setNext(new ListNode(2));

        expect(listNode.getNext().getValue()).toEqual(2);  
        expect(listNode.getNext().getPrevious()).toEqual(null);
    
    });

    test('getValue', () => {
        expect(listNode.getValue()).toEqual(1);
    });

    test('setValue', () => {

        listNode.setValue(13);
        expect(listNode.getValue()).toEqual(13);
    
    });

    test('getPrevious', () => {

        listNode.setNext(new ListNode(2), true);

        expect(listNode.getNext().getPrevious().getValue()).toEqual(1); 
    
    });

    test('setPrevious(node, true)', () => {
        
        listNode.setPrevious(new ListNode(2), true); 

        expect(listNode.getPrevious().getNext().getValue()).toEqual(1);
    
    });

    test('setPrevious(node)', () => {
        
        listNode.setPrevious(new ListNode(2)); 

        expect(listNode.getPrevious().getNext()).toEqual(null);
    
    });
    

});