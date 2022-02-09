class Engineer {
    constructor(public name: string, public salary: number) {
        console.log(`Engineer: ${name}, ${salary} `);
    }
    work(hours: number) {
        console.log(`Engineer is working ${hours} hours`);
    }
}

class SoftwareEngineer extends Engineer {
    constructor(name: string, salary: number, public stockOptions: number) {
        super(name, salary);
        console.log(`SW Engineer ESOP: ${stockOptions}`);
    }
    work(hours: number): void {
        console.log('All the time')
        super.work(hours);
    }
}

let sw: Engineer = new SoftwareEngineer("Sam", 100000, 10000);
sw.work(12);