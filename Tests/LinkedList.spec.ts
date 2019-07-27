import {LinkedList} from "../src/LinkedList";
import { expect } from "chai";

describe('LinkedLists Tests', () => {

    describe('constructor', () => {
        it('should initialize LinkedList with default values ', () => {
            const linkedList = new LinkedList<number>();

            expect(linkedList.getHead()).equal(null);
            expect(linkedList.getLast()).equal(null);

        });
    });

    describe('isEmpty', () => {
        it('should check is LinkedList empty', () => {
            const linkedList = new LinkedList<number>();

            expect(linkedList.isEmpty()).equal(true);

        });
    });


    describe('append', () => {
        it('should append new value to LinkedList, if empty new value should be set as header', () => {
            const linkedList = new LinkedList<number>();
            linkedList.append(13);

            // @ts-ignore
            expect(linkedList.getHead().getValue()).equal(13);

        });

    });

    describe('append', () => {
        it('should append new value to LinkedList', () => {
            const linkedList = new LinkedList<number>();
            linkedList.append(1);
            linkedList.append(2);
            linkedList.append(3);
            linkedList.append(4);

            linkedList.print(); 

            // @ts-ignore
            expect(linkedList.getLast().getValue()).equal(4);

        });

    });

});