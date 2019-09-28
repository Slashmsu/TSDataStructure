import {DoubleLinkedList} from "../DoubleLinkedList";

const linkedList = new DoubleLinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

linkedList.print();