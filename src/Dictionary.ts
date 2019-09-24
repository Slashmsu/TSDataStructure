/*
     Author: Bakhtier Gaibulloev
*/

/**
 *@param T type of dictionary items.
 */
export class Dictionary<T> {

    //=========================================================================================================================================================
    // Public properties
    //=========================================================================================================================================================

    //=========================================================================================================================================================
    // Private properties
    //=========================================================================================================================================================

    //========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    constructor() {
        
    }

    /*constructor(init: { key: string; value: T; }[]) {
        for (let i = 0; i < init.length; i++) {
            // @ts-ignore
            this[init[i].key] = init[i].value;
        }
    }*/

    //=========================================================================================================================================================
    // Public methods
    //=========================================================================================================================================================

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
        return this.keys().length === 0
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
     * Remove item from dictionary.
     */
    public remove(key: string) {
        // @ts-ignore
        delete this[key];
    }

    /**
     * Remove all items from dictionary.
     */
    public clear() {
        let that = this;
        that.keys().forEach(function (e) {
            that.remove(e);
        })
    }

    /**
     * Returns string array of items keys.
     */
    public keys(): string[] {
        let result = [];

        for (let i in this)
            if (!(<any>this[i] instanceof Function)) {
                result.push(i);
            }

        return result;
    }

    /**
     * Returns array of all items.
     */
    public toArray(): T[] {
        let result: T[] = [];

        for (let i in this)
            if (!(this.get(i) instanceof Function))
                result.push(this.get(i));

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
        } else {
            return false;
        }

    }

    /**
     * Check is item with given key exist.
     */
    public containsKey(key: string): boolean {
        // @ts-ignore
        return typeof this[key] !== "undefined";
    }

    //=========================================================================================================================================================
    // Private methods
    //=========================================================================================================================================================

}
