let a: string = "12";

let x: number = Number(a);
let i: number = +a;
let j: number = parseInt(a); //Most widely used
let k: number = <number><unknown>a; //WEIRD syntax
console.log(typeof i, typeof j, typeof k);

let b: string = "true";

let bool1: boolean = Boolean(b); 
console.log(typeof bool1);

class Animal {
    eat() {}
}
class Horse extends Animal {
    run() {}
}

let h: Animal = new Horse();
h.eat();
//h.run();
if(h instanceof Horse) {
    //let horse = <Horse>h; //Weird syntax
    let horse = h as Horse; //more commonly used
    horse.run();
}

//Primitive types
//Type(value)

//Reference types
//<type>variable
//variable as type