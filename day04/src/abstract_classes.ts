abstract class Employee {
    constructor(public id: number, public name: string) {}
    public logInToWork() {
        console.log(`Employee ${this.name} is logging in to work`);
    }
    abstract work(): void;
}
class Manager extends Employee {
    constructor(id: number, name: string, public salary: number) {
        super(id, name);
    }
    work(): void {
        console.log(`Manager ${this.name} is working`);
    }
}
let mgr = new Manager(219387, 'Ram', 200000);
mgr.logInToWork();
mgr.work();
