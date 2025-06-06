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
     * Returns 'Head' node.
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
     * Returns amount of nodes.
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
     * Append given value to the 'linkedList' and returns updated 'LinkedList'.
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
     * Returns 'Last' node.
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
     * Enables iteration over the list using ES6 iteration protocols.
     */
    public *[Symbol.iterator](): IterableIterator<T> {
        let node = this._head;
        while (node !== null) {
            yield node.getValue();
            node = node.getNext();
        }
    }

    /**
     * Inserts given value to the DoubleLinkedList and returns updated DoubleLinkedList.
     * */
    public insert(afterPosition: number, value: T): DoubleLinkedList<T> {

        if (this.isEmpty()) {
            return this;
        }

        if (afterPosition < 0 || afterPosition > this.size()) {
            throw new Error('Position is out of range');
        }
        if (afterPosition === 0) {
            this.insertFirst(value);
            return this;
        }
        if (afterPosition === this.size()) {
            this.insertLast(value);
            return this;
        }
        const node = new DoubleLinkedNode(value);
        let current = this.getHead();
        let previous = this.getHead();
        let i = 0;
        while (i < afterPosition) {
            previous = current;
            current = current.getNext();
            i++;
        }
        previous.setNext(node);
        node.setNext(current);
        current.setPrevious(node);
        node.setPrevious(previous);

        return this;
    }

    /**
     * Insert given value to the 'DoubleLinkedList' at the end and returns updated 'DoubleLinkedList'.
     * @param value DoubleLinkedList
     */
    insertLast(value: T): DoubleLinkedList<T> {
        const node = new DoubleLinkedNode(value);

        if (this.isEmpty()) {
            this._head = node;
            this._last = node;
        } else {

            if (this._last) {
                this._last.setNext(node);
                node.setPrevious(this._last);
                this._last = node;
            }
        }

        return this;
    }

    /**
     * Inserts given value to the 'DoubleLinkedList' at the beginning and returns updated 'DoubleLinkedList'.
     * @param value DoubleLinkedList
     */
    insertFirst(value: T): DoubleLinkedList<T> {
        const node = new DoubleLinkedNode(value);

        if (this.isEmpty()) {
            this._head = node;
            this._last = node;
        } else {

            if (this._head) {
                this._head.setPrevious(node);
                node.setNext(this._head);
                this._head = node;
            }
        }

        return this;
    }

    /**
     * Get node by given index.
     * @param index Index of node.
     */
    public get(index: number): DoubleLinkedNode<T> | null {

        if (this.isEmpty()) {
            return null;
        }

        if (index < 0 || index > this.size()) {
            throw new Error('Position is out of range');
        }

        let current = this._head;
        let i = 0;
        while (i < index) {
            current = current.getNext();
            i++;
        }

        return current;
    }

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
