type CarType = { model: string };
let swift: CarType = {model: 'Dzire'};

let subtract: (a: number, b: number) => number;
//subtract = (a: number, b: number) => "" + (a - b);
subtract = (a: number, b: number) => a - b;

type OperationType = (a: number, b: number) => number;

const addition: OperationType = (a, b) => a + b;
const subtraction: OperationType = (a, b) => a - b;
const multiplication: OperationType = (a, b) => a * b;

//Higher-Order function; It takes another function as an argument
function doSomething(op: OperationType) {
    let result = op(10, 20);
    console.log(result);
}

doSomething(addition);
doSomething(subtraction);
doSomething(multiplication);
doSomething((a, b) => a / b);
doSomething((a, b) => a * a + b * b + 2 * a * b)