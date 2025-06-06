export class HashMap<K, V> {

  // =========================================================================================================================================================
  // Private properties
  // =========================================================================================================================================================

  private map: Map<K, V>;

  // =========================================================================================================================================================
  // Constructor
  // =========================================================================================================================================================

  constructor() {
    this.map = new Map<K, V>();
  }

  // =========================================================================================================================================================
  // Public methods
  // =========================================================================================================================================================

  /**
   * Inserts the specified key-value pair into the map. If the key already exists,
   * its value will be updated with the new value.
   *
   * @param key The key to insert.
   * @param value The value to associate with the key.
   */
  public put(key: K, value: V): void {
    this.map.set(key, value);
  }

  /**
   * Returns the value associated with the specified key, or null if the key is not
   * present in the map.
   *
   * @param key The key to look up.
   * @returns The value associated with the key, or null if the key is not present.
   */
  public get(key: K): V | null {
    if (this.containsKey(key)) {
      return this.map.get(key) || null;
    } else {
      return null;
    }
  }

  /**
   * Removes the entry with the specified key from the map, if it exists.
   *
   * @param key The key of the entry to remove.
   * @returns True if the entry was removed, false if it did not exist in the map.
   */
  public remove(key: K): boolean {
    if (this.containsKey(key)) {
      this.map.delete(key);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Returns true if the map contains the specified key, otherwise false.
   *
   * @param key The key to check for.
   * @returns True if the map contains the key, false otherwise.
   */
  public containsKey(key: K): boolean {
    return this.map.has(key);
  }

  /**
   * Returns true if the map contains the specified value, otherwise false.
   *
   * @param value The value to check for.
   * @returns True if the map contains the value, false otherwise.
   */
  public containsValue(value: V): boolean {
    for (const val of this.map.values()) {
      if (val === value) {
        return true;
      }
    }
    return false;
  }

  /**
   * Returns a Set of all the keys in the map.
   *
   * @returns A Set of all the keys in the map.
   */
  public keySet(): Set<K> {
    return new Set(this.map.keys());
  }

  /**
   * Returns an array of all the values in the map.
   *
   * @returns An array of all the values in the map.
   */
  public values(): V[] {
    return Array.from(this.map.values());
  }

  /**
   * Returns a Set of all the key-value pairs (as tuples) in the map.
   *
   * @returns A Set of all the key-value pairs (as tuples) in the map.
   */
  public entrySet(): Set<[K, V]> {
    return new Set(this.map.entries());
  }

  /**
   * Returns the number of key-value pairs in the map.
   *
   * @returns The number of key-value pairs in the map.
   */
  public size(): number {
    return this.map.size;
  }

  /**
   * Returns true if the map is empty, otherwise false.
   *
   * @returns True if the map is empty, false otherwise.
   */
  public isEmpty(): boolean {
    return this.map.size === 0;
  }

  /**
   * Removes all entries from the map.
   */
  public clear(): void {
    this.map.clear();
  }
  /**
   * Enables iteration over key-value pairs in insertion order.
   */
  public *[Symbol.iterator](): IterableIterator<[K, V]> {
    for (const entry of this.map.entries()) {
      yield entry;
    }
  }


}
