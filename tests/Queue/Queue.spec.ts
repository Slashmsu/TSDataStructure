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

        expect(queue.pop()).to.equal(1);

    });

    it('pop if Queue is empty', () => {

        expect(queue.pop()).to.equal(null);

    });

    it('size', () => {

        queue.push(1);
        queue.push(2);
        queue.push(3);
        queue.push(4);
        queue.push(5);

        expect(queue.size()).to.equal(5);

    });

});