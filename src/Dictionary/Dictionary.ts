/*
     Author: Bakhtier Gaibulloev
*/

/**
 *@param T type of dictionary items.
 */
export class Dictionary<T> {

    // =========================================================================================================================================================
    // Public properties
    // =========================================================================================================================================================

    // =========================================================================================================================================================
    // Private properties
    // =========================================================================================================================================================

    // ========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    constructor() {

    }

    // =========================================================================================================================================================
    // Public methods
    // =========================================================================================================================================================

    /**
     * Returns the number of entries (distinct keys) in this dictionary.
     */
    public size(): number {
        return this.keys().length;
    }

    /**
     * Returns 'true' if Dictionary is empty and 'false' if no.
     * */
    public isEmpty(): boolean {
        return this.keys().length === 0;
    }

    /**
     * Add new item to dictionary.
     */
    public put(key: string, value: T) {
        // @ts-ignore
        this[key] = value;
    }

    /**
     * Returns item by given key.
     */
    public get(key: string): T {
        // @ts-ignore
        return this[key];
    }

    /**
     * Removes item from dictionary.
     */
    public remove(key: string) {
        // @ts-ignore
        delete this[key];
    }

    /**
     * Removes all items from dictionary.
     */
    public clear() {
        const that = this;
        that.keys().forEach(function (e) {
            that.remove(e);
        });
    }

    /**
     * Returns string array of items keys.
     */
    public keys(): string[] {
        const result = [];

        for (const i in this) {
            if (!(<any>this[i] instanceof Function)) {
                result.push(i);
            }
        }

        return result;
    }

    /**
     * Returns array of all items.
     */
    public toArray(): T[] {
        const result: T[] = [];

        for (const i in this) {
            if (!(this.get(i) instanceof Function)) {
                result.push(this.get(i));
            }
        }

        return result;
    }

    /**
     * Set new value to given key item.
     */
    public setValue(key: string, value: T): boolean {

        // @ts-ignore
        if (this[key]) {
            // @ts-ignore
            this[key] = value;
            return true;
        }
            return false;

    }

    /**
     * Check is item with given key exist.
     */
    public containsKey(key: string): boolean {
        // @ts-ignore
        return typeof this[key] !== 'undefined';
    }

    // =========================================================================================================================================================
    // Private methods
    // =========================================================================================================================================================

}
