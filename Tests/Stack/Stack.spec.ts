import { Stack } from '../../src/Stack/Stack';

describe('Stack', () => {

    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });

    test('push/pop', () => {

        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()).toEqual(3);

    });

    test('size', () => {

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        expect(stack.size()).toEqual(5);

    });

});
