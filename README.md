# TSDataStructure

[![CodeFactor](https://www.codefactor.io/repository/github/slashmsu/typestructure/badge/master)](https://www.codefactor.io/repository/github/slashmsu/typestructure/overview/master)

Collection of data structures(LinkedList, DoubleLinkedList, Stack, Queue, Dictionary and etc...)

# Data Structures

## Dictionary<T>

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

Checks is item with given key exist.

```typescript

const dictionary = new Dictionary<number>();
dictionary.isEmpty(); // true
dictionary.size(); // 0
dictionary.put('someKey', 1);
dictionary.get('someKey')
dictionary.remove('someKey');

dictionary.put('key1', 1);
dictionary.put('key2', 2);
dictionary.put('key3', 3);
dictionary.keys(); // ['key1', 'key2', 'key3']
dictionary.toArray(); // [1, 2, 3]
dictionary.clear();

dictionary.size(); // 0

```

## LinkedList<T>

1->2->3->4

#### getHead(): LinkedNode<T>

Returns the 'Head' node

#### isEmpty(): boolean

Returns 'true' if 'LinkedList' is empty and 'false' if no.

#### size(): number

Returns the amount of nodes

#### append(value: T): LinkedList<T>

Append given value to the 'linkedList' and returns updated 'LinkedList'

#### getLast(): LinkedNode<T>

Returns the 'Last' node

#### toArray(): T[]

Returns array of all items.

```typescript

const linkedList: LinkedList<number>; // _head = null, _last = null
linkedList.getHead(); // null
linkedList.append(1);
linkedList.getHead(); // 1
linkedList.isEmpty(); // false
linkedList.append(2);
linkedList.size(); // 2
linkedList.toArray(); // [1,2]
linkedList.getLast(); // 2

```

## DoubleLinkedList<T>

1<->2<->3<->4

#### getHead(): LinkedNode<T>

Returns the 'Head' node

#### isEmpty(): boolean

Returns 'true' if 'LinkedList' is empty and 'false' if no.

#### size(): number

Returns the amount of nodes

#### append(value: T): LinkedList<T>

Append given value to the 'linkedList' and returns updated 'LinkedList'

#### getLast(): LinkedNode<T>

Returns the 'Last' node

#### toArray(): T[]

Returns array of all items.

```typescript

const doubleLinkedList: DoubleLinkedList<number>; // _head = null, _last = null
doubleLinkedList.getHead(); // null
doubleLinkedList.append(1);
doubleLinkedList.getHead(); // 1
doubleLinkedList.isEmpty(); // false
doubleLinkedList.append(2);
doubleLinkedList.size(); // 2
doubleLinkedList.toArray(); // [1,2]
doubleLinkedList.getLast(); // 2

```

## Stack<T>

#### push(value: T)

Pushes value to stack

#### pop(): T

Fetchs the last value from the stack

#### size(): T

Returns the size of stack

```typescript

const stack: Stack<number>;
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3
stack.size(); // 2

```

## Queue<T>

#### push(value: T)

Pushes value to stack

#### pop(): T

Fetchs the first value from the stack

#### size(): T

Returns the size of stack

```typescript

const queue: Queue<number>;
queue.push(1);
queue.push(2);
queue.push(3);
queue.pop(); // 1
queue.size(); // 2

```