import { Stack } from '../../src/Stack/Stack';
import { expect } from 'chai';

describe('Stack', () => {

    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });

    it('push/pop', () => {

        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()).equal(3);
        expect(stack.size()).equal(2);

    });

    it('pop if stack is empty', () => {

        expect(stack.pop()).equal(null);

    });

    it('peek on empty stack', () => {

        expect(stack.peek()).equal(null);

    });

    it('peek', () => {

        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.peek()).equal(3);

    });

    it('toArray', () => {

        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.toArray()).deep.equal([1, 2, 3]);

    });

    it('should be iterable with for-of', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        const collected: number[] = [];
        for (const value of stack) {
            collected.push(value);
        }
        expect(collected).to.deep.equal([1, 2, 3]);
    });

    it('size', () => {

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        expect(stack.size()).equal(5);

    });

});
