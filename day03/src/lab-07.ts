class MyMap<K, V> {
    private sourceMap: Map<K, V>;
    constructor() {
        this.sourceMap = new Map();
    }
    getItem(key: K): V | undefined {
        return this.sourceMap.get(key);
    }
    setItem(key: K, value: V) {
        this.sourceMap.set(key, value);
    }
    clear() {
        this.sourceMap.clear();
    }
    printMap() {
        this.sourceMap.forEach((value, key) => console.log(`${key} -> ${value}`))
    }
}
const numberMap = new MyMap<string, number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string, string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();