type CarType = {
    model: string,
    yearOfMake: number
};

let car: CarType = { model: "BMW", yearOfMake: 2020 };
let anotherCar: CarType = {model: "Ferrari", yearOfMake: 2021};

type CompanyType = { name: string, employees?: number };
let intuit: CompanyType = {name: "Intuit"};

//car = { model: "BMW", yearOfMake: 2020 };

type ComputationResults = [number, number];
let squareAndCubeOf2:ComputationResults = [4, 8];
console.log(squareAndCubeOf2[0], squareAndCubeOf2[1]);

function myMath(num: number): ComputationResults {
    return [num * num, num * num * num];
}