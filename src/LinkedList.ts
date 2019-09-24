/*
     Author: Bakhtier Gaibulloev
*/

import {LinkedListNode} from "./Models/LinkedListNode";

/**
 *@param T type of LinkedList items.
 */
export class LinkedList<T> {

    //=========================================================================================================================================================
    // Public properties
    //=========================================================================================================================================================

    //=========================================================================================================================================================
    // Private properties
    //=========================================================================================================================================================

    //private readonly _EMPTY_NODE: LinkedListNode<T>;
    private _head: LinkedListNode<T> | null;
    private _last: LinkedListNode<T> | null;

    //========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    constructor() {
        this._head = null;
        this._last = null;
        //this._EMPTY_NODE = new LinkedListNode<T>();
    }

    //=========================================================================================================================================================
    // Public methods
    //=========================================================================================================================================================

    /**
     * Returns 'Head' node
     * */
    public getHead(): LinkedListNode<T> | null {
        return !this._head ? null : this._head;
    }

    /**
     * Returns 'true' if 'LinkedList' is empty and 'false' if no.
     * */
    public isEmpty () {
        return !this._head;
    }

    /**
     * Returns amount of nodes
     * */
    public size(): number {

        if (!this._head) {
            return 0;
        }

        let result = 0;
        let node: LinkedListNode<T>;
        node = this._head;
        while(node !== null) {
            // @ts-ignore
            node = node.getNext();
            result++;
        }

        return result;
    }

    /**
     * Append given value to the 'linkedList' and returns updated 'LinkedList'
     * */
    public append (value: T): LinkedList<T> {

        if (this.isEmpty()) {
            this._head = new LinkedListNode<T>(value);
            this._last = this._head;
        } else {

            const node = new LinkedListNode(value);

            if(this._last && this._head) {

                if (this._last === this._head) {
                    this._head.setNext(node);
                }
                this._last.setNext(node);
                node.setPrevious(this._last);
                this._last = node;
            }

        }

        return this;
    }

    /**
     * Returns 'Last' node
     * */
    public getLast(): LinkedListNode<T> | null {
        return !this._last ? null : this._last;
    }

    /**
     * Inserts given value to the linkedList and returns updated LinkedList
     * */
    /*public insert (): LinkedList<T> {

        // todo

        return this;
    }*/

    /**
     * Print LinkedList
     * */
    public print() {
        let node = this.getHead();

        if (node === null) {
            return "Empty";
        } else {

            const nodes: T[] = [];

            // @ts-ignore
            while(node !== null) {


                // @ts-ignore
                //process.stdout.write(node.getValue() + "->");

                // @ts-ignore
                nodes.push(node.getValue());

                // @ts-ignore
                node = node.getNext();
            }

            console.log(nodes.join('<->'));

        }
        
    }

    //=========================================================================================================================================================
    // Private methods
    //=========================================================================================================================================================

}
