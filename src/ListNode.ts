/*
     Author: Bakhtier Gaibulloev
*/

/**
 *@param T type of ListNode items.
 */
export class ListNode<T> {

    //=========================================================================================================================================================
    // Public properties
    //=========================================================================================================================================================

    //=========================================================================================================================================================
    // Private properties
    //=========================================================================================================================================================

    private _value: T | null;
    private _next?: ListNode<T> | null;
    private _previous?: ListNode<T> | null;

    //========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    constructor(value?: T | null, next?: ListNode<T> , previous?: ListNode<T>) {
        this._value = value;
        this._next = next;
        this._previous = previous;
    }

    //=========================================================================================================================================================
    // Public methods
    //=========================================================================================================================================================

    /**
     * Set given value to the node
     * */
    public setValue(_value: T): ListNode<T> | null {

        if (!this)
            return null;

        this._value = _value;
        return this;

    }

    /**
     * Returns value
     * */
    public getValue(): T | null{

        return this._value;

    }

    /**
     * Returns 'Next' node
     * */
    public getNext(): ListNode<T> | null {
        return !this._next ? null : this._next;
    }

    /**
     * Sets given LinkedListNode as 'Next' node to the 'Current' node
     * */
    public setNext(next: ListNode<T> | null, setPrevious: boolean = false): ListNode<T> | null {

        this._next = next;

        if (setPrevious && next)
            next._previous = this;
        
        return this._next;

    }

    /**
     * Returns 'Previous' node
     * */
    public getPrevious(): ListNode<T> | null {
        return !this._previous ? null : this._previous; 
    }

    /**
     * Sets given LinkedListNode as 'Previous' node to the 'Current' node
     * */
    public setPrevious(previous: ListNode<T> | null, setNext: boolean = false): ListNode<T> | null {

        this._previous = previous; 

        if (setNext && previous)
            previous._next = this;

        return this._previous;

    }

    //=========================================================================================================================================================
    // Private methods
    //=========================================================================================================================================================

}
