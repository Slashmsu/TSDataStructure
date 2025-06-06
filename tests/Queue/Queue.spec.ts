import { Queue } from '../../src/Queue/Queue';
import { expect } from 'chai';

describe('Queue', () => {

    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    it('push/pop', () => {

        queue.push(1);
        queue.push(2);
        queue.push(3);

        expect(queue.pop()).equal(1);
        expect(queue.size()).equal(2);

    });

    it('pop if queue is empty', () => {

        expect(queue.pop()).equal(null);

    });

    it('peek', () => {

        queue.push(1);
        queue.push(2);
        queue.push(3);

        expect(queue.peek()).equal(3);

    });

    it('toArray', () => {

        queue.push(1);
        queue.push(2);
        queue.push(3);

        expect(queue.toArray()).deep.equal([1, 2, 3]);

    });

    it('should be iterable with for-of', () => {
        queue.push(1);
        queue.push(2);
        queue.push(3);

        const collected: number[] = [];
        for (const value of queue) {
            collected.push(value);
        }
        expect(collected).to.deep.equal([1, 2, 3]);
    });

    it('size', () => {

        queue.push(1);
        queue.push(2);
        queue.push(3);
        queue.push(4);
        queue.push(5);

        expect(queue.size()).equal(5);

    });

});
