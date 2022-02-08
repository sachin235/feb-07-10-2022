const arr = [101, 22, 43, 14, 5, 906, 310, 561, 84, 23, 100];

//Print all the numbers
arr.forEach(num => console.log(num));
arr.forEach(function(num) {
    console.log(num);
});

//Print the sum of all numbers
let total = arr.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log("Total", total);
total = arr.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
});

//Print the first odd number
let firstOddNum = arr.find(num => num % 2 != 0);
firstOddNum = arr.find(function(num) {
    return num % 2 != 0;
});
console.log("First odd number", firstOddNum);

//Generate an list of squares of all numbers
arr
    .map(num => num * num)
    .forEach(num => console.log(num));

//Generate a list of numbers divisible by 5
arr
    .filter(num => num % 5 === 0)    
    .forEach(num => console.log(num));

//Print all the even numbers    
arr
    .filter(num => num % 2 === 0)    
    .forEach(num => console.log(num));