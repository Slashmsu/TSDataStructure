/*
     Author: Bakhier Gaibulloev
*/

/**
 *@param T type of LinkedListNode items.
 */
export class LinkedListNode<T> {

    //=========================================================================================================================================================
    // Public properties
    //=========================================================================================================================================================

    //=========================================================================================================================================================
    // Private properties
    //=========================================================================================================================================================

    private _value: T | null;
    private _next?: LinkedListNode<T> | null;
    private _previous?: LinkedListNode<T> | null;

    //========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    constructor(value: T | null, next?: LinkedListNode<T> , previous?: LinkedListNode<T>) {
        this._value = value;
        this._next = next;
        this._previous = previous;
    }

    //=========================================================================================================================================================
    // Public methods
    //=========================================================================================================================================================

    /**
     * Returns 'Next' node
     * */
    public getNext(): LinkedListNode<T> | null {
        return !this._next ? null : this._next;
    }

    /**
     * Returns 'Previous' node
     * */
    public getPrevious(): LinkedListNode<T> | null {
        return !this._previous ? null : this._previous;
    }

    /**
     * Set given value to the node
     * */
    /*public setValue(next: LinkedListNode<T>): LinkedListNode<T> | null {

        if (!this)
            return null;

        this._next = next;
        return this;

    }*/

    /**
     * Returns value
     * */
    public getValue(): T | null{

        return this._value;

    }

    /**
     * Sets given LinkedListNode as 'Next' node to the 'Current' node
     * */
    public setNext(next: LinkedListNode<T> | null): LinkedListNode<T> | null {

        /*if (!this._next)
            return null;*/

        this._next = next;
        return this._next;

    }

    /**
     * Sets given LinkedListNode as 'Previous' node to the 'Current' node
     * */
    public setPrevious(previous: LinkedListNode<T> | null): LinkedListNode<T> | null {

        /*if (!this._previous)
            return null;*/

        this._previous = previous;
        return this._previous;

    }

    //=========================================================================================================================================================
    // Private methods
    //=========================================================================================================================================================

}
