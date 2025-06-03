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

    it('pop if stacl is empty', () => {

        expect(stack.pop()).equal(null);

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

    it('size', () => {

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        expect(stack.size()).equal(5);

    });

});
