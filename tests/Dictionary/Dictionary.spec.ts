import { Dictionary } from '../../src';
import { expect } from 'chai';

describe('Dictionary', () => {

    let dictionary: Dictionary<number>;

    beforeEach(() => {
        dictionary = new Dictionary<number>();
    });

    it('constructor()', () => {

        expect(dictionary.isEmpty()).to.equal(true);
        expect(dictionary.size()).to.equal(0);

    });

    it('isEmpty()', () => {

        expect(dictionary.isEmpty()).to.equal(true);
        dictionary.put('key', 1);
        expect(dictionary.isEmpty()).to.equal(false);

    });

    it('size()', () => {

        expect(dictionary.size()).to.equal(0);
        dictionary.put('key', 1);
        expect(dictionary.size()).to.equal(1);

    });

    it('put()', () => {

        dictionary.put('key', 1);
        expect(dictionary.get('key')).to.equal(1);

    });

    it('get()', () => {

        dictionary.put('key', 1);
        expect(dictionary.get('key')).to.equal(1);

    });

    it('remove()', () => {

        dictionary.put('key', 1);
        dictionary.remove('key');
        expect(dictionary.size()).to.equal(0);

    });

    it('clear()', () => {

        dictionary.put('key1', 1);
        dictionary.put('key2', 2);
        dictionary.put('key3', 3);
        dictionary.clear();
        expect(dictionary.size()).to.equal(0);

    });

    it('keys()', () => {

        dictionary.put('key1', 1);
        dictionary.put('key2', 2);
        dictionary.put('key3', 3);
        expect(dictionary.keys()).deep.equal(['key1', 'key2', 'key3']);

    });

    it('toArray()', () => {

        dictionary.put('key1', 1);
        dictionary.put('key2', 2);
        dictionary.put('key3', 3);
        expect(dictionary.toArray()).deep.equal([1, 2, 3]);

    });

    it('setValue()', () => {

        dictionary.put('key1', 1);
        dictionary.put('key2', 2);
        dictionary.put('key3', 3);
        expect(dictionary.setValue('key2', 7)).to.equal(true);
        expect(dictionary.setValue('key5', 9)).to.equal(false);

    });

    it('containsKey()', () => {

        dictionary.put('key1', 1);
        dictionary.put('key2', 2);
        dictionary.put('key3', 3);
        expect(dictionary.containsKey('key2')).to.equal(true);
        expect(dictionary.containsKey('key5')).to.equal(false);

    });

});
