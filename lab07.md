* Create __lab-07.ts__ file
* Create a __MyMap__ class with the following methods

* __setItem(key: string, item: T)__ // should create a new key-value pair
 
* __getItem(key: string)__ // should retrieve the value of the provided key
* __clear()__ // should remove all key-value pairs
* __printMap()__ // should output key-value pairs

* The map should be usable like shown below:

``` typescript
const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
```