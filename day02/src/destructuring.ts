let model = "BMW";
let year = 2021;
//let car = { model: model, year: year }; //OLD STYLE
let car = { model, year, color: "Yellow" };  //NEW STYLE
console.log(car);

let person = { firstName: "Sam", age: 12 };

//OLD STYLE
//let firstName = person.firstName;
//let age = person.age;

let { age, firstName } = person; //Object destructuring
console.log(firstName, age);


let lst = [10, 20, 30];
//OLD STYLE
//let a = lst[0];
//let b = lst[1];
let [a, _, b, d] = lst; //array destructuring
console.log(a, b, d);

//swap the values of two numbers x and y without using XOR or temp variable
let x = 100;
let y = 200;
[y, x] = [x, y]; 
console.log(x, y);
