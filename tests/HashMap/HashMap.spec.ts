import { HashMap } from '../../src/HashMap/HashMap';
import { expect } from 'chai';

describe('HashMap', () => {
    let map: HashMap<string, number>;

    beforeEach(() => {
        map = new HashMap<string, number>();
    });

    describe('put()', () => {
        it('should add a new key-value pair to the map', () => {
            map.put('foo', 42);

            expect(map.size()).equal(1);
            expect(map.get('foo')).equal(42);
        });

        it('should update the value for an existing key', () => {
            map.put('foo', 42);
            map.put('foo', 99);

            expect(map.size()).equal(1);
            expect(map.get('foo')).equal(99);
        });
    });

    describe('get()', () => {
        it('should return the value associated with a key', () => {
            map.put('foo', 42);

            const result = map.get('foo');

            expect(result).equal(42);
        });

        it('should return null if the key is not present in the map', () => {
            const result = map.get('foo');

            expect(result).equal(null);
        });
    });

    describe('remove()', () => {
        it('should remove an existing key-value pair from the map', () => {
            map.put('foo', 42);

            const result = map.remove('foo');

            expect(result).equal(true);
            expect(map.size()).equal(0);
            expect(map.get('foo')).equal(null);
        });

        it('should return false if the key is not present in the map', () => {
            const result = map.remove('foo');

            expect(result).equal(false);
            expect(map.size()).equal(0);
            expect(map.get('foo')).equal(null);
        });
    });

    describe('containsKey()', () => {
        it('should return true if the key is present in the map', () => {
            map.put('foo', 42);

            const result = map.containsKey('foo');

            expect(result).to.be.true;
        });

        it('should return false if the key is not present in the map', () => {
            const result = map.containsKey('foo');

            expect(result).to.be.false;
        });
    });

    describe('containsValue()', () => {
        it('should return true if the value is present in the map', () => {
            map.put('foo', 42);

            const result = map.containsValue(42);

            expect(result).to.be.true;
        });

        it('should return false if the value is not present in the map', () => {
            const result = map.containsValue(42);

            expect(result).to.be.false;
        });
    });

    describe('keySet()', () => {
        it('should return a Set containing all keys in the map', () => {
            map.put('foo', 42);
            map.put('bar', 99);
            map.put('baz', 123);

            const result = map.keySet();

            expect(result.size).to.equal(3);
            expect(result.has('foo')).to.be.true;
            expect(result.has('bar')).to.be.true;
            expect(result.has('baz')).to.be.true;
        });

        it('should return an empty Set if the map is empty', () => {
            const result = map.keySet();

            expect(result.size).to.equal(0);
        });
    });

    describe('values()', () => {
        it('should return an array containing all values in the map', () => {
            map.put('foo', 42);
            map.put('bar', 99);
            map.put('baz', 123);

            const result = map.values();

            expect(result.length).to.equal(3);
            expect(result).to.include(42);
            expect(result).to.include(99);
            expect(result).to.include(123);
        });

        it('should return an empty array if the map is empty', () => {
            const result = map.values();

            expect(result.length).to.equal(0);
        });
    });

    describe('entrySet()', () => {
        it('should return a Set containing all key-value pairs in the map', () => {
            const map = new HashMap<string, number>();
            map.put('a', 1);
            map.put('b', 2);
            map.put('c', 3);

            const actualSet = map.entrySet();
            const expectedSet = new Set([
                                            ['a', 1],
                                            ['b', 2],
                                            ['c', 3],
                                        ]);

            expect(actualSet.size).to.equal(expectedSet.size);
        });

        it('should return an empty Set if the map is empty', () => {
            const result = map.entrySet();

            expect(result.size).to.equal(0);
        });
    });

    describe('size()', () => {
        it('should return the number of key-value pairs in the map', () => {
            map.put('foo', 42);
            map.put('bar', 99);
            map.put('baz', 123);

            const result = map.size();

            expect(result).to.equal(3);
        });

        it('should return 0 if the map is empty', () => {
            const result = map.size();

            expect(result).to.equal(0);
        });
    });

    describe('isEmpty()', () => {
        it('should return true if the map is empty', () => {
            const result = map.isEmpty();

            expect(result).to.be.true;
        });

        it('should return false if the map is not empty', () => {
            map.put('foo', 42);

            const result = map.isEmpty();

            expect(result).to.be.false;
        });
    });

    describe('clear()', () => {
        it('should remove all key-value pairs from the map', () => {
            map.put('foo', 42);
            map.put('bar', 99);
            map.put('baz', 123);

            map.clear();

            expect(map.size()).to.equal(0);
            expect(map.isEmpty()).to.be.true;
        });

        it('should do nothing if the map is already empty', () => {
            map.clear();

            expect(map.size()).to.equal(0);
            expect(map.isEmpty()).to.be.true;
        });
    });
});
