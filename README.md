# TSDataStructure

[![CodeFactor](https://www.codefactor.io/repository/github/slashmsu/tsdatastructure/badge)](https://www.codefactor.io/repository/github/slashmsu/tsdatastructure)

[![Build Status](https://travis-ci.org/Slashmsu/TSDataStructure.svg?branch=master)](https://travis-ci.org/Slashmsu/TSDataStructure)

Collection of data structures(LinkedList, DoubleLinkedList, Stack, Queue, Dictionary and etc...) for TypeScript.

# Installation

```
npm i datastructure-ts --save
```

# Data Structures

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

#### getHead(): DoubleLinkedList<T>

Returns the 'Head' node

#### isEmpty(): boolean

Returns 'true' if 'DoubleLinkedList' is empty and 'false' if no.

#### size(): number

Returns the amount of nodes

#### append(value: T): LinkedList<T>

Append given value to the 'DoubleLinkedList' and returns updated 'DoubleLinkedList'

#### getLast(): LinkedNode<T>

Returns the 'Last' node

#### toArray(): T[]

Returns array of all items.

#### insert(afterPosition: number, value: T): DoubleLinkedList<T>

Inserts given value to the DoubleLinkedList and returns updated DoubleLinkedList.

#### insertLast(value: T): DoubleLinkedList<T>

Inserts given value to the DoubleLinkedList and returns updated DoubleLinkedList.

#### insertLast(value: T): DoubleLinkedList<T>

Insert given value to the 'DoubleLinkedList' at the end and returns updated 'DoubleLinkedList'.

#### insertFirst(value: T): DoubleLinkedList<T>

Inserts given value to the 'DoubleLinkedList' at the beginning and returns updated 'DoubleLinkedList'.

#### get(index: number): DoubleLinkedList<T>

Get node by given index.

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

## Stack<T>

#### push(value: T)

Pushes value to stack

#### pop(): T

Fetchs the last value from the stack

#### peek(): T

The method returns the element at the top of the Stack else returns NULL if the Stack is empty.


#### size(): T

Returns the size of stack

#### toArray(): T[]

Returns array of all items

```typescript

const stack = new Stack<number>();
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

#### peek(): T

The method returns the element at the top of the Queue else returns NULL if the Queue is empty.

#### size(): T

Returns the size of queue

#### toArray(): T[]

Returns array of all items


```typescript

const queue = new Queue<number>();
queue.push(1);
queue.push(2);
queue.push(3);
queue.pop(); // 1
queue.size(); // 2

```

## BinaryTree<T>

#### getRoot(): BinaryTreeNode<T>

Returns 'root' node

#### findNode(value: T, node: BinaryTreeNode<T> = null): BinaryTreeNode<T>

Returns node with a given value

```typescript

const binaryTree = new BinaryTree<number>(1);
binaryTree.getRoot().append(2);
binaryTree.getRoot().append(3);

binaryTree.getRoot().getLeft().append(4);
binaryTree.getRoot().getLeft().append(5);

binaryTree.getRoot().getRight().setLeft(6);
binaryTree.getRoot().getRight().setRight(7);

//          1
//        /   \
//       2     3 
//      / \   / \
//     4   5 6   7

binaryTree.findNode(6).getValue(); // 6

```

## HashMap<K, V>

#### `put(key: K, value: V): void`
Inserts the specified key-value pair into the map. If the key already exists, its value will be updated with the new value.

#### `get(key: K): V | null`
Returns the value associated with the specified key, or null if the key is not present in the map.

#### `remove(key: K): boolean`
Removes the entry with the specified key from the map, if it exists. Returns true if the entry was removed, false if it did not exist in the map.

#### `containsKey(key: K): boolean`
Returns true if the map contains the specified key, otherwise false.

#### `containsValue(value: V): boolean`
Returns true if the map contains the specified value, otherwise false.

#### `keySet(): Set<K>`
Returns a Set of all the keys in the map.

#### `values(): V[]`
Returns an array of all the values in the map.

#### `entrySet(): Set<[K, V]>`
Returns a Set of all the key-value pairs (as tuples) in the map.

#### `size(): number`
Returns the number of key-value pairs in the map.

#### `isEmpty(): boolean`
Returns true if the map is empty, otherwise false.

#### `clear(): void`
Removes all entries from the map.

## TreeNode<T>

### `getValue()`
Returns the value of the node.

### `setValue(value: T)`
Sets the value of the node.

### `getParent()`
Returns the parent of the node.

### `setParent(parent: TreeNode<T>)`
Sets the parent of the node.

### `getChildren()`
Returns the children of the node.

### `addChild(child: TreeNode<T>)`
Adds a child to the node.

### `removeChild(child: TreeNode<T>)`
Removes a child from the node.

### `isLeaf()`
Removes all children from the node.

### `getHeight()`
Returns the height of the node.

### `getDepth()`
Returns the depth of the node.

### `traversePreorder(callback: (node: TreeNode<T>) => void)`
Traverse the tree in preorder (root, left subtree, right subtree) and apply the given callback function to each node.

### `traversePostorder(callback: (node: TreeNode<T>) => void)`
Traverse the tree in postorder (left subtree, right subtree, root) and apply the given callback function to each node.

### `traverseInorder(callback: (node: TreeNode<T>) => void)`
Traverse the tree in inorder (left subtree, root, right subtree) and apply the given callback function to each node.

### `traverseLevelOrder(callback: (node: TreeNode<T>) => void)`
Traverse the tree level by level, starting at the root, and apply the given callback function to each node.

## Tree<T>

### `getRoot()`

Returns the root node of the tree.

### `addChild(parent, childValue)`

Adds a child node to a given parent node. Returns the newly created child node.

### `removeNode(node)`

Removes a node and all of its children from the tree.

### `size()`

Returns the number of nodes in the tree.

### `isEmpty()`

Checks if the tree is empty (i.e., has no nodes).

### `traverseLevelOrder(callback)`

Traverse the tree in breadth-first order and apply the given callback function to each node.

# Todo
#### 1) Graph


If you have an advice, please feel free to contact with me
