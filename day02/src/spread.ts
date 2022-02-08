//... is the rest operator that represents variable number of arguments
let even = [2, 4, 6, 8];
let odd = [1, 3, 5, 7, 9];
let numbers = [... even, ... odd];
console.log(numbers);

let country = { name: "India", capital: "New Delhi" };
//let myCountry = { name: country.name, capital: country.capital, population: "1.3B" };
let myCountry = { ... country, population: "1.3B" };
console.log(myCountry);