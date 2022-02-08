type VarArgsOperation = (... args: number[]) => number;

//this is HO function
const compute = (operation: VarArgsOperation) => {
    const arr = [1, 5, 34, 324, 324, 235, 2353, 1, 55, 83, 9, 667];
    const result = operation(... arr); //spread operator
    console.log(result);
}

const findSum: VarArgsOperation = (... args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

const findMax: VarArgsOperation = (... args) => {
    let max = args.length > 0 ? args[0] : Math.max();
    for (let i = 0; i < args.length; i++) {
        if (args[i] > max) {
            max = args[i];
        }
    }
    return max;
}


const findMin: VarArgsOperation = (... args) => {
    let min = args.length > 0 ? args[0] : Math.min();
    for (let i = 0; i < args.length; i++) {
        if (args[i] < min) {
            min = args[i];
        }
    }
    return min;
}

compute(findSum);
compute(findMax);
compute(findMin);


