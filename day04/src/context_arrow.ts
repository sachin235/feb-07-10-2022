let person = {
    name: 'Sam',
    age: 12,
    printInfo() {
        console.log(this.name, this.age)
    },
    printArrow: () =>  {
        console.log(this.name, this.age);
    }
};

person.printInfo();
