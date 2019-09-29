# TSDataStructure

[![CodeFactor](https://www.codefactor.io/repository/github/slashmsu/typestructure/badge/master)](https://www.codefactor.io/repository/github/slashmsu/typestructure/overview/master)

Collection of data structures(LinkedList, DoubleLinkedList, Stack, Queue, Dictionary and etc...)

# Data Structures

## Dictionary<T>

#### size(): number
#### isEmpty(): boolean
#### put(key: string, value: T)
#### get(key: string): T
#### remove(key: string)
#### clear()
#### keys(): string[]
#### toArray(): T[] 
#### containsKey(key: string): boolean 

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

#### getHead(): LinkedNode<T>
#### isEmpty(): boolean
#### size(): number
#### append(value: T): LinkedList<T>
#### getLast(): LinkedNode<T>
#### toArray(): T[]

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