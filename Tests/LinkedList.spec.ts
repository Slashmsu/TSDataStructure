import {LinkedList} from "../src/LinkedList";

describe('LinkedList', () => {

    let doubleLinkedList: LinkedList<number>;

    beforeEach(() => {
        doubleLinkedList = new LinkedList<number>()
    });

    test('constructor', () => {

        expect(doubleLinkedList.getHead()).toEqual(null);
        expect(doubleLinkedList.getLast()).toEqual(null);
    
    });
    
    test('getHead', () => {

        expect(doubleLinkedList.getHead()).toEqual(null);
        doubleLinkedList.append(1);

        expect(doubleLinkedList.getHead().getValue()).toEqual(1);
    
    });
    
    test('isEmpty', () => {
        expect(doubleLinkedList.isEmpty()).toEqual(true);

        doubleLinkedList.append(1);
        expect(doubleLinkedList.isEmpty()).toEqual(false);
    
    });

    test('size', () => {
 
        expect(doubleLinkedList.size()).toEqual(0);

        doubleLinkedList.append(1);
        doubleLinkedList.append(2);
        doubleLinkedList.append(3);
        doubleLinkedList.append(4);

        expect(doubleLinkedList.size()).toEqual(4);

    });
    
    test('append', () => {
        doubleLinkedList.append(1);

        expect(doubleLinkedList.getHead().getValue()).toEqual(1);

        doubleLinkedList.append(2);
        doubleLinkedList.append(3);
        doubleLinkedList.append(4);

        expect(doubleLinkedList.getLast().getValue()).toEqual(4);
    
    });

    test('toArray()', () => {

        doubleLinkedList.append(1);
        doubleLinkedList.append(2);
        doubleLinkedList.append(3);
        doubleLinkedList.append(4);
        expect(doubleLinkedList.toArray()).toEqual([1, 2, 3, 4]);

    });
    
    test('getLast', () => {
        doubleLinkedList.append(1);
        doubleLinkedList.append(2);
        doubleLinkedList.append(3);
        doubleLinkedList.append(4);

        expect(doubleLinkedList.getLast().getValue()).toEqual(4);
    
    });

});