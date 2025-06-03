import { PriorityQueue } from '../../src/PriorityQueue/PriorityQueue';
import { expect } from 'chai';

describe('PriorityQueue', () => {
    let queue: PriorityQueue<string>;

    beforeEach(() => {
        queue = new PriorityQueue<string>();
    });

    it('push/pop works according to priority', () => {
        queue.push('low', 5);
        queue.push('high', 1);
        queue.push('medium', 3);

        expect(queue.pop()).equal('high');
        expect(queue.pop()).equal('medium');
        expect(queue.pop()).equal('low');
    });

    it('peek returns highest priority', () => {
        queue.push('a', 2);
        queue.push('b', 1);

        expect(queue.peek()).equal('b');
        expect(queue.size()).equal(2);
    });

    it('handles empty queue', () => {
        expect(queue.pop()).equal(null);
        expect(queue.peek()).equal(null);
        expect(queue.size()).equal(0);
    });
});
