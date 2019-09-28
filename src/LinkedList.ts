/*
     Author: Bakhtier Gaibulloev
*/

import {ListNode} from "./ListNode";

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

    private _head: ListNode<T> | null;
    private _last: ListNode<T> | null;

    //========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    constructor() {
        this._head = null;
        this._last = null;
    }

    //=========================================================================================================================================================
    // Public methods
    //=========================================================================================================================================================

    /**
     * Returns 'Head' node
     * */
    public getHead(): ListNode<T> | null {
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
        let node: ListNode<T>;
        node = this._head;
        while(node !== null) {
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
            this._head = new ListNode<T>(value);
            this._last = this._head;
        } else {

            const node = new ListNode(value);

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
    public getLast(): ListNode<T> | null {
        return !this._last ? null : this._last;
    }

    /**
     * Returns array of all items.
     */
    public toArray(): T[] {
        let result: T[] = [];

        if (!this._head) {
            return result;
        }

        let node: ListNode<T>;
        node = this._head;
        while(node !== null) {
            result.push(node.getValue());
            node = node.getNext();
        }

        return result;
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

            while(node !== null) {

                nodes.push(node.getValue());

                node = node.getNext();
            }

            console.log(nodes.join('<->'));

        }
        
    }

    //=========================================================================================================================================================
    // Private methods
    //=========================================================================================================================================================

}
