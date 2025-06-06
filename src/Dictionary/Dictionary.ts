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

    private items: { [key: string]: T } = {};

    // ========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    // =========================================================================================================================================================
    // Public methods
    // =========================================================================================================================================================

    /**
     * Returns the number of entries (distinct keys) in this dictionary.
     */
    public size(): number {
        return Object.getOwnPropertyNames(this.items).length;
    }

    /**
     * Returns 'true' if the dictionary is empty and 'false' if not.
     */
    public isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * Adds a new item to the dictionary.
     * @param key the key to add the value under
     * @param value the value to add
     */
    public put(key: string, value: T) {
        this.items[key] = value;
    }

    /**
     * Returns an item by the given key.
     * @param key the key to look up
     * @returns the item associated with the key, or undefined if the key is not in the dictionary
     */
    public get(key: string): T | undefined {
        return this.items[key];
    }

    /**
     * Removes an item from the dictionary.
     * @param key the key of the item to remove
     */
    public remove(key: string) {
        delete this.items[key];
    }

    /**
     * Removes all items from the dictionary.
     */
    public clear() {
        this.items = {};
    }

    /**
     * Returns an array of all keys in the dictionary.
     * @returns an array of strings representing the keys in the dictionary
     */
    public keys(): string[] {
        return Object.getOwnPropertyNames(this.items);
    }

    /**
     * Returns an array of all values in the dictionary.
     * @returns an array of the values in the dictionary
     */
    public values(): T[] {
        return this.keys().map(key => this.items[key]);
    }

    /**
     * Applies the given function to each key-value pair in the dictionary.
     * @param fn a function to apply to each key-value pair
     */
    public forEach(fn: (value: T, key: string) => void) {
        this.keys().forEach(key => fn(this.items[key], key));
    }

    /**
     * Returns a new dictionary containing only the key-value pairs for which the given function returned true.
     * @param fn a function to apply to each key-value pair
     * @returns a new dictionary containing only the key-value pairs for which the given function returned true
     */
    public filter(fn: (value: T, key: string) => boolean): Dictionary<T> {
        const result = new Dictionary<T>();
        this.forEach((value, key) => {
            if (fn(value, key)) {
                result.put(key, value);
            }
        });
        return result;
    }

    /**
     * Returns a new dictionary containing the results of applying the given function to each key-value pair in the dictionary.
     * @param fn a function to apply to each key-value pair
         * @returns a new dictionary containing the results of applying the given function to each key-value pair in the dictionary
    */
    public map<U>(fn: (value: T, key: string) => U): Dictionary<U> {
        const result = new Dictionary<U>();
        this.forEach((value, key) => {
            result.put(key, fn(value, key));
        });
        return result;
    }

    /**
     * Returns a new instance of the Dictionary object with the same key-value pairs of the original.
     * @returns a new instance of the Dictionary object
     */
    public clone(): Dictionary<T> {
        const result = new Dictionary<T>();
        this.forEach((value, key) => {
            result.put(key, value);
        });
        return result;
    }

    /**
     * Sets the value associated with a key.
     * @param key the key to set the value of
     * @param value the new value
     * @returns true if the key was in the dictionary and the value was set, false otherwise
     */
    public setValue(key: string, value: T): boolean {
        if (key in this.items) {
            this.items[key] = value;
            return true;
        } else {
            return false;
        }
    }

    /**
     * Determines if the dictionary contains a key.
     * @param key the key to check for
     * @returns true if the key is in the dictionary, false otherwise
     */
    public containsKey(key: string): boolean {
        return key in this.items;
    }

    /**
     * Returns an array of all key-value pairs in the dictionary.
     * @returns an array of key-value pair objects in the form of [{key: key1, value: value1}, {key: key2, value: value2}, ...]
     */
    public toArray(): { key: string, value: T }[] {
        return this.keys().map((key: string) => {
            return { key, value: this.items[key] };
        });
    }

    /**
     * Enables iteration over key-value pairs in insertion order.
     */
    public *[Symbol.iterator](): IterableIterator<{ key: string; value: T }> {
        for (const key of this.keys()) {
            yield { key, value: this.items[key] };
        }
    }

    // =========================================================================================================================================================
    // Private methods
    // =========================================================================================================================================================

}
