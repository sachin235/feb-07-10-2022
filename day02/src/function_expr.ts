const work = function() {
    console.log(`Working hard`);
};
work();

const eat = function(items: string): string {
    return `Eating ${items}`;
};

//Arrow functions are not just shortcuts; they also do something more ie., change the context. 
const hog = (items: string)  => `Hogging ${items} really fast`;
hog('Sandwich');



let message = "";
let num = 12;
//if-else statement
if(num % 2 == 0) {
    message = "Even";
} else {
    message = "Odd";
}
//if-else expression is not available in TS, but eventually we'll get there
//let message2 = if(num % 2 == 0) "Even" else "Odd";


//work = function() {};
// function work() {
//     console.log('Working hard');
// }

// function work(hours: number) {
//     console.log(`Working ${hours} hours`);
// }