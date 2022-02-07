let employee = ["Bond", 12];
console.log(typeof(employee));
employee = ["Sam", "Ram"];

//tuples
let contract: [string, number] = ["Bond", 12];
console.log(typeof(contract));
//contract = ["Sam", "Ram"];

let squareAndCube: [number, number] = [4, 8];
console.log(contract[0], contract[1]);
//contract[1] = "";

function compute(num: number): number {
    return num * num;
}

let squareOfNumber = compute(2);
console.log(squareOfNumber);

function operate(num: number): [number, number] {
    return [num * num, num * num * num];
}
console.log(operate(3));