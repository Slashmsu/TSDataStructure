/*
     Author: Bakhtier Gaibulloev
*/

/**
 *@param T type of queue items.
 */
export class Queue<T> {

    // =========================================================================================================================================================
    // Public properties
    // =========================================================================================================================================================

    // =========================================================================================================================================================
    // Private properties
    // =========================================================================================================================================================

    private _store: T[] = [];

    // ========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    // =========================================================================================================================================================
    // Public methods
    // =========================================================================================================================================================

    /**
     * Pushes value to stack
     * @param val
     */
    push(val: T) {

        this._store.push(val);
    }

    pop(): T | null {

        if (this._store.length > 0) {
            return this._store.shift();
        }

        return null;
    }

    /**
     * The method returns the element at the top of the Queue else returns NULL if the Queu is empty.
     */
    peek(): T | null {

        if (this._store.length > 0) {
            return this._store[this._store.length - 1];
        }

        return null;
    }

    /**
    * Returns the size of stack
    */
    size(): number {

        return this._store.length;
    }

    /**
    * Returns array of all items.
    */
    toArray(): T[] {
        return this._store;
    }

    // =========================================================================================================================================================
    // Private methods
    // =========================================================================================================================================================

}
