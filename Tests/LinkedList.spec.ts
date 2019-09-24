import {LinkedList} from "../src/LinkedList";

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

        // @ts-ignore
        expect(linkedList.getHead().getValue()).toEqual(1);
    
    });
    
    test('isEmpty', () => {
        expect(linkedList.isEmpty()).toEqual(true);

        linkedList.append(1);
        expect(linkedList.isEmpty()).toEqual(false);
    
    });

    test('size', () => {
 
        expect(linkedList.size()).toEqual(0);

        linkedList.print();

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        linkedList.print();

        expect(linkedList.size()).toEqual(4);

        // @ts-ignore
        linkedList.getLast().getPrevious().setNext(null);
        expect(linkedList.size()).toEqual(3);

        linkedList.print();

    });
    
    test('append', () => {
        linkedList.append(1);

        // @ts-ignore
        expect(linkedList.getHead().getValue()).toEqual(1);

        linkedList.append(2);
        linkedList.append(3);

        // @ts-ignore
        let someNode = linkedList.getLast().getPrevious();


        // @ts-ignore
        expect(someNode.getPrevious().getValue()).toEqual(1);

        // @ts-ignore
        expect(someNode.getNext().getValue()).toEqual(3);


        linkedList.append(4);

        // @ts-ignore
        expect(linkedList.getLast().getValue()).toEqual(4);
    
    });
    
    test('getLast', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        // @ts-ignore
        expect(linkedList.getLast().getValue()).toEqual(4);
    
    });

});