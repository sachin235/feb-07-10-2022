class Person {
    private _name: string;
    private _age: number;

    constructor(theName: string, theAge: number) {
        this._name = theName;
        this._age = theAge;
    }

    study(topic: string): string {
        return `${this._name} is studying ${topic}`;
    } 
    
    public get name() : string {
        return this._name;
    }

    public get age() : number {
        return this._age;
    }

    public set name(value : string) {
        this._name = value;
    }

    public set age(value : number) {
        this._age = value;
    }
    
}
let p1: Person = new Person('Sam', 12);
console.log(p1.name, p1.age);