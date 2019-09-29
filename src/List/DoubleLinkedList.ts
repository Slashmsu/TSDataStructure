/*
     Author: Bakhtier Gaibulloev
*/

import { DoubleLinkedNode } from '../Nodes/DoubleLinkedNode';

/**
 *@param T type of DoubleLinkedList items.
 */
export class DoubleLinkedList<T> {

    // =========================================================================================================================================================
    // Public properties
    // =========================================================================================================================================================

    // =========================================================================================================================================================
    // Private properties
    // =========================================================================================================================================================

    private _head: DoubleLinkedNode<T> | null;
    private _last: DoubleLinkedNode<T> | null;

    // ========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    constructor() {
        this._head = null;
        this._last = null;
    }

    // =========================================================================================================================================================
    // Public methods
    // =========================================================================================================================================================

    /**
     * Returns 'Head' node
     * */
    public getHead(): DoubleLinkedNode<T> | null {
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
        let node: DoubleLinkedNode<T>;
        node = this._head;
        while (node !== null) {
            node = node.getNext();
            result++;
        }

        return result;
    }

    /**
     * Append given value to the 'linkedList' and returns updated 'LinkedList'
     * */
    public append (value: T): DoubleLinkedList<T> {

        if (this.isEmpty()) {
            this._head = new DoubleLinkedNode<T>(value);
            this._last = this._head;
        } else {

            const node = new DoubleLinkedNode(value);

            if (this._last && this._head) {

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
    public getLast(): DoubleLinkedNode<T> | null {
        return !this._last ? null : this._last;
    }

    /**
     * Returns array of all items.
     */
    public toArray(): T[] {
        const result: T[] = [];

        if (!this._head) {
            return result;
        }

        let node: DoubleLinkedNode<T>;
        node = this._head;
        while (node !== null) {
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
            return 'Empty';
        }  {

            const nodes: T[] = [];

            while (node !== null) {

                nodes.push(node.getValue());

                node = node.getNext();
            }

            console.log(nodes.join('<->'));

        }

    }

    // =========================================================================================================================================================
    // Private methods
    // =========================================================================================================================================================

}
