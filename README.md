# TSDataStructure

[![CodeFactor](https://www.codefactor.io/repository/github/slashmsu/typestructure/badge/master)](https://www.codefactor.io/repository/github/slashmsu/typestructure/overview/master)

Collection of data structures(LinkedList, DoubleLinkedList, Stack, Queue, Dictionary and etc...)

## Data Structures

### Dictionary<T>

#### constructor()

#### size(): number

Returns the number of entries (distinct keys) in this dictionary.

#### isEmpty(): boolean

Returns 'true' if Dictionary is empty and 'false' if no.

#### put(key: string, value: T)

Add new item to dictionary.

#### get(key: string): T

Returns item by given key.

#### remove(key: string)

Removes item from dictionary.

#### clear()

Removes all items from dictionary.

#### keys(): string[]

Returns string array of items keys.

#### toArray(): T[] 

Returns array of all items.

#### containsKey(key: string): boolean 

Check is item with given key exist.