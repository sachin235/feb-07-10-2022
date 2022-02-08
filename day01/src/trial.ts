/*
const generate = () => Math.round(Math.random() * 100);
const increment = num => num + 1;
const doubleIt = num => num * 2;
const printIt = value => console.log(value);

try {
    const num = generate();
    const incValue = increment(num);
    const doubledValue = doubleIt(incValue);
    printIt(doubledValue);    
} catch (error) {
    console.log("Error", error.message);
} 
console.log("End of program");
*/

const generate = () => {
    const num = Math.round(Math.random() * 100);
    return new Promise((resolve, reject) => resolve(num));
};
const increment = (num) => {
    const result = num + 1;
    return new Promise((resolve, reject) => resolve(result));
};
const doubleIt = (num) => {
    const result = num * 2;
    return new Promise((resolve, reject) => resolve(result));
};

const doSomething = async () => await generate()
    .then(res => increment(res))
    .then(res => doubleIt(res))
    .then(res => console.log(res));

doSomething();
console.log("End of program");    
