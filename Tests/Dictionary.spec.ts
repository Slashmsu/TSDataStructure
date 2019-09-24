import { Dictionary } from "../src/Dictionary";

describe('Dictionary', () => {

    let dictionary: Dictionary<number>;

    beforeEach(() => {
        dictionary = new Dictionary<number>()
    });

    test('constructor()', () => {
        
        expect(dictionary.isEmpty()).toEqual(true);
        expect(dictionary.size()).toEqual(0);

    });
    
    test('isEmpty()', () => {

        expect(dictionary.isEmpty()).toEqual(true);
        dictionary.put("key", 1);
        expect(dictionary.isEmpty()).toEqual(false);

    });

    test('size()', () => {

        expect(dictionary.size()).toEqual(0);
        dictionary.put("key", 1);
        expect(dictionary.size()).toEqual(1);

    });

    test('put()', () => {

        dictionary.put("key", 1);
        expect(dictionary.get("key")).toEqual(1);

    });

    test('get()', () => {

        dictionary.put("key", 1);
        expect(dictionary.get("key")).toEqual(1);

    });

    test('remove()', () => {

        dictionary.put("key", 1);
        dictionary.remove("key");
        expect(dictionary.size()).toEqual(0);

    });

    test('clear()', () => {

        dictionary.put("key1", 1);
        dictionary.put("key2", 2);
        dictionary.put("key3", 3);
        dictionary.clear();
        expect(dictionary.size()).toEqual(0);

    });

    test('keys()', () => {

        dictionary.put("key1", 1);
        dictionary.put("key2", 2);
        dictionary.put("key3", 3);
        expect(dictionary.keys()).toEqual(["key1", "key2", "key3"]);

    });

    test('toArray()', () => {

        dictionary.put("key1", 1);
        dictionary.put("key2", 2);
        dictionary.put("key3", 3);
        expect(dictionary.toArray()).toEqual([1, 2, 3]);

    });

    test('setValue()', () => {

        dictionary.put("key1", 1);
        dictionary.put("key2", 2);
        dictionary.put("key3", 3);
        expect(dictionary.setValue("key2", 7)).toEqual(true);
        expect(dictionary.setValue("key5", 9)).toEqual(false);

    });

    test('containsKey()', () => {

        dictionary.put("key1", 1);
        dictionary.put("key2", 2);
        dictionary.put("key3", 3);
        expect(dictionary.containsKey("key2")).toEqual(true);
        expect(dictionary.containsKey("key5")).toEqual(false);

    });
    
});