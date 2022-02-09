function Person(name, age) {
    this.name = name;
    this.age = age;

    this.eat = function() {
        console.log(`${this.name} is eating`);
    }
}
Person.doSomething = function() {
    console.log('Doing something');
}

let p1 = new Person('Sam', 12);
let p2 = new Person('Ram', 23);

console.log(p1.name, p1.age);
console.log(p2.name, p2.age);
p1.eat();
p2.eat();
Person.doSomething();