import { Queue } from '../../src/Queue/Queue';

describe('Queue', () => {

    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    test('push/pop', () => {

        queue.push(1);
        queue.push(2);
        queue.push(3);

        expect(queue.pop()).toEqual(1);

    });

    test('size', () => {

        queue.push(1);
        queue.push(2);
        queue.push(3);
        queue.push(4);
        queue.push(5);

        expect(queue.size()).toEqual(5);

    });

});
