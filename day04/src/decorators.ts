function logger(target: any) {
    console.log(`**** log called on ${target.name}`);
}
function Log(value: boolean): any {
    return value ? logger : null;
}

function overriderEnabled(target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log('****Override called on ' + methodName);
}
function overriderDisabled(target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log('****Override called on ' + methodName);
    descriptor.writable = false;
}

function Override(value: boolean): any {
    return value ? overriderEnabled : overriderDisabled; 
}



@Log(true)
class Training {
    constructor(public name: string) {}

    @Override(false)
    public attend() {
        console.log(`Attending ${this.name}`);
    }
}
let training = new Training('TS');
training.attend(); 
training.attend = function() {}; //Run time error