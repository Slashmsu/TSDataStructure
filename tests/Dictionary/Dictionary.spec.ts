import { Dictionary } from '../../src';
import { expect } from 'chai';

describe('Dictionary', () => {

    let dictionary: Dictionary<number>;

    beforeEach(() => {
        dictionary = new Dictionary<number>();
    });

    it('constructor()', () => {

        expect(dictionary.isEmpty()).equal(true);
        expect(dictionary.size()).equal(0);

    });

    it('isEmpty()', () => {

        expect(dictionary.isEmpty()).equal(true);
        dictionary.put('key', 1);
        expect(dictionary.isEmpty()).equal(false);

    });

    it('size()', () => {

        expect(dictionary.size()).equal(0);
        dictionary.put('key', 1);
        expect(dictionary.size()).equal(1);

    });

    it('put()', () => {

        dictionary.put('key', 1);
        expect(dictionary.get('key')).equal(1);

    });

    it('get()', () => {

        dictionary.put('key', 1);
        expect(dictionary.get('key')).equal(1);

    });

    it('remove()', () => {

        dictionary.put('key', 1);
        dictionary.remove('key');
        expect(dictionary.size()).equal(0);

    });

    it('clear()', () => {

        dictionary.put('key1', 1);
        dictionary.put('key2', 2);
        dictionary.put('key3', 3);
        dictionary.clear();
        expect(dictionary.size()).equal(0);

    });

    it('keys()', () => {

        dictionary.put('key1', 1);
        dictionary.put('key2', 2);
        dictionary.put('key3', 3);
        expect(dictionary.keys()).to.deep.equal(['key1', 'key2', 'key3']);

    });

    it('toArray()', () => {

        dictionary.put('key1', 1);
        dictionary.put('key2', 2);
        dictionary.put('key3', 3);
        expect(dictionary.toArray()).to.deep.equal([
            {'key': 'key1', 'value': 1},
            {'key': 'key2', 'value': 2},
            {'key': 'key3', 'value': 3}
    ]);

    });

    it('setValue()', () => {

        dictionary.put('key1', 1);
        dictionary.put('key2', 2);
        dictionary.put('key3', 3);
        expect(dictionary.setValue('key2', 7)).equal(true);
        expect(dictionary.setValue('key5', 9)).equal(false);

    });

    it('containsKey()', () => {

        dictionary.put('key1', 1);
        dictionary.put('key2', 2);
        dictionary.put('key3', 3);
        expect(dictionary.containsKey('key2')).equal(true);
        expect(dictionary.containsKey('key5')).equal(false);

    });

});
