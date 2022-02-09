let evenNumbers = [2, 4, 6, 8, 8];
console.log(evenNumbers.length);

let oddNumbers: Set<number> = new Set();
oddNumbers.add(1);
oddNumbers.add(3);
oddNumbers.add(5);
//oddNumbers.add("5");
oddNumbers.forEach(it => console.log(it));
console.log(oddNumbers.size);

let romanNumerals: Map<number, string> = new Map();
romanNumerals.set(1, 'I');
romanNumerals.set(2, 'II');
romanNumerals.set(3, 'III');
console.log(romanNumerals.get(2));
romanNumerals.delete(2);
romanNumerals.forEach((value, key) => console.log(`${key}: ${value}`));
