/*
     Author: Bakhier Gaibulloev
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
     * Returns 'Last' node
     * */
    public getLast(): LinkedListNode<T> | null {
        return !this._last ? null : this._last;
    }

    /**
     * Returns 'true' if 'LinkedList' is empty and 'false' if no.
     * */
    public isEmpty () {
        return !this._head;
    }

    /**
     * Append given value to the 'linkedList' and returns updated 'LinkedList'
     * */
    public append (value: T): LinkedList<T> {

        if (this.isEmpty()) {
            this._head = new LinkedListNode<T>(value);
            this._last = new LinkedListNode<T>(value);
        } else {

            const node = new LinkedListNode(value);

            if(this._last) {
                this._last.setNext(node);
                node.setPrevious(this._last);
                this._last = node;
            }

        }

        return this;
    }

    /**
     * Inserts given value to the linkedList and returns updated LinkedList
     * */
    /*public insert (): LinkedList<T> {



        return this;
    }*/

    /**
     * Print LinkedList
     * */
    public print() {
        let node = this.getHead();

        // @ts-ignore
        while(node.getNext() !== null) {
            // @ts-ignore
            process.stdout.write(node.getValue() + "->");
            // @ts-ignore
            node.setNext(node.getNext());
        }
    }

    //=========================================================================================================================================================
    // Private methods
    //=========================================================================================================================================================

}
