export interface PriorityQueueItem<T> {
    value: T;
    priority: number;
}

export class PriorityQueue<T> {
    private heap: PriorityQueueItem<T>[] = [];

    constructor(private compare: (a: number, b: number) => boolean = (a, b) => a < b) {}

    push(value: T, priority: number): void {
        this.heap.push({ value, priority });
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        const top = this.heap[0].value;
        const end = this.heap.pop()!;
        if (!this.isEmpty()) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
        return top;
    }

    peek(): T | null {
        return this.isEmpty() ? null : this.heap[0].value;
    }

    size(): number {
        return this.heap.length;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    toArray(): T[] {
        return this.heap.map(item => item.value);
    }

    /**
     * Iterates over the queue values in heap order.
     */
    public *[Symbol.iterator](): IterableIterator<T> {
        for (const item of this.heap) {
            yield item.value;
        }
    }

    private bubbleUp(index: number): void {
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (this.compare(element.priority, parent.priority)) {
                this.heap[parentIndex] = element;
                this.heap[index] = parent;
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private bubbleDown(index: number): void {
        const length = this.heap.length;
        const element = this.heap[index];
        while (true) {
            const leftChildIdx = 2 * index + 1;
            const rightChildIdx = 2 * index + 2;
            let swapIdx: number | null = null;

            if (leftChildIdx < length) {
                const left = this.heap[leftChildIdx];
                if (this.compare(left.priority, element.priority)) {
                    swapIdx = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                const right = this.heap[rightChildIdx];
                if (
                    (swapIdx === null && this.compare(right.priority, element.priority)) ||
                    (swapIdx !== null && this.compare(right.priority, this.heap[swapIdx].priority))
                ) {
                    swapIdx = rightChildIdx;
                }
            }

            if (swapIdx === null) {
                break;
            }
            this.heap[index] = this.heap[swapIdx];
            this.heap[swapIdx] = element;
            index = swapIdx;
        }
    }
}
