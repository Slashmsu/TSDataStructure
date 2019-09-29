import {LinkedList} from "../../src/List/LinkedList";

describe('LinkedList', () => {

    let linkedList: LinkedList<number>;

    beforeEach(() => {
        linkedList = new LinkedList<number>()
    });

    test('constructor', () => {

        expect(linkedList.getHead()).toEqual(null);
        expect(linkedList.getLast()).toEqual(null);
    
    });
    
    test('getHead', () => {

        expect(linkedList.getHead()).toEqual(null);
        linkedList.append(1);

        expect(linkedList.getHead().getValue()).toEqual(1);
    
    });
    
    test('isEmpty', () => {
        expect(linkedList.isEmpty()).toEqual(true);

        linkedList.append(1);
        expect(linkedList.isEmpty()).toEqual(false);
    
    });

    test('size', () => {
 
        expect(linkedList.size()).toEqual(0);

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        expect(linkedList.size()).toEqual(4);

    });
    
    test('append', () => {
        linkedList.append(1);

        expect(linkedList.getHead().getValue()).toEqual(1);

        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        expect(linkedList.getLast().getValue()).toEqual(4);
    
    });

    test('toArray()', () => {

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        expect(linkedList.toArray()).toEqual([1, 2, 3, 4]);

    });
    
    test('getLast', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        expect(linkedList.getLast().getValue()).toEqual(4);
    
    });

});