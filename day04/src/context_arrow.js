this.name = 'Global Sam';
this.age = 10000;

let person = {
    name: 'Sam',
    age: 12,
    printInfo() {
        console.log("printInfo", this);
        console.log(this.name, this.age)
    },
    printArrow: () =>  {
        console.log("printArrow", this);
        console.log(this.name, this.age);
    }
};

person.printInfo();
person.printArrow();