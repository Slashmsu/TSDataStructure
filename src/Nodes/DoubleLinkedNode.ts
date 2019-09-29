/*
     Author: Bakhtier Gaibulloev
*/

/**
 *@param T type of DoubleLinkedList items.
 */
export class DoubleLinkedNode<T> {

    // =========================================================================================================================================================
    // Public properties
    // =========================================================================================================================================================

    // =========================================================================================================================================================
    // Private properties
    // =========================================================================================================================================================

    private _value: T | null;
    private _next?: DoubleLinkedNode<T> | null;
    private _previous?: DoubleLinkedNode<T> | null;

    // ========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    constructor(value?: T | null, next?: DoubleLinkedNode<T> , previous?: DoubleLinkedNode<T>) {
        this._value = value;
        this._next = next;
        this._previous = previous;
    }

    // =========================================================================================================================================================
    // Public methods
    // =========================================================================================================================================================

    /**
     * Set given value to the node
     * */
    public setValue(_value: T): DoubleLinkedNode<T> | null {

        if (!this) {
            return null;
        }

        this._value = _value;
        return this;

    }

    /**
     * Returns value
     * */
    public getValue(): T | null {

        return this._value;

    }

    /**
     * Returns 'Next' node
     * */
    public getNext(): DoubleLinkedNode<T> | null {
        return !this._next ? null : this._next;
    }

    /**
     * Sets given LinkedListNode as 'Next' node to the 'Current' node
     * */
    public setNext(next: DoubleLinkedNode<T> | null, setPrevious: boolean = false): DoubleLinkedNode<T> | null {

        this._next = next;

        if (setPrevious && next) {
            next._previous = this;
        }

        return this._next;

    }

    /**
     * Returns 'Previous' node
     * */
    public getPrevious(): DoubleLinkedNode<T> | null {
        return !this._previous ? null : this._previous;
    }

    /**
     * Sets given LinkedListNode as 'Previous' node to the 'Current' node
     * */
    public setPrevious(previous: DoubleLinkedNode<T> | null, setNext: boolean = false): DoubleLinkedNode<T> | null {

        this._previous = previous;

        if (setNext && previous) {
            previous._next = this;
        }

        return this._previous;

    }

    // =========================================================================================================================================================
    // Private methods
    // =========================================================================================================================================================

}
