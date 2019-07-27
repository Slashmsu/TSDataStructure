/**
 *@param U type of dictionary items.
 */
class Dictionary<U> {

    //=========================================================================================================================================================
    // Public properties
    //=========================================================================================================================================================

    //=========================================================================================================================================================
    // Private properties
    //=========================================================================================================================================================

    //========================================================================================================================================================
    // Constructor
    // =========================================================================================================================================================

    constructor(init: { key: string; value: U; }[]) {
        for (let i = 0; i < init.length; i++) {
            // @ts-ignore
            this[init[i].key] = init[i].value;
        }
    }

    //=========================================================================================================================================================
    // Public methods
    //=========================================================================================================================================================

    /**
     * Returns the number of entries (distinct keys) in this dictionary.
     */
    public Size(): number {
        return this.Keys().length;
    }

    /**
     * Tests if this dictionary maps no keys to value.
     * */
    public IsEmpty(): boolean {
        return this.Keys().length === 0
    }

    /**
     * Add new item to dictionary.
     */
    public Put(key: string, value: U) {
        // @ts-ignore
        this[key] = value;
    }

    /**
     * Remove item from dictionary.
     */
    public Remove(key: string) {
        // @ts-ignore
        delete this[key];
    }

    /**
     * Remove all items from dictionary.
     */
    public Clear() {
        let that = this;
        that.Keys().forEach(function (e) {
            that.Remove(e);
        })
    }

    /**
     * Returns string array of items keys.
     */
    public Keys(): string[] {
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
    public ToArray(): U[] {
        let result: U[] = [];

        for (let i in this)
            if (!(this.Get(i) instanceof Function))
                result.push(this.Get(i));

        return result;
    }

    /**
     * Returns item by given key.
     */
    public Get(key: string): U {
        // @ts-ignore
        return this[key];
    }

    /**
     * Return item by given propertie's name and value.
     */
    public getValueByProperty(property: string, key: string): U {
        return this.ToArray().filter(function (v) {
            // @ts-ignore
            return v[property] === key;
        })[0];
    }

    /**
     * Set new value to given key item.
     */
    public SetValue(key: string, value: U): boolean {

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
    public ContainsKey(key: string): boolean {
        // @ts-ignore
        return typeof this[key] !== "undefined";
    }

    //=========================================================================================================================================================
    // Private methods
    //=========================================================================================================================================================

}
