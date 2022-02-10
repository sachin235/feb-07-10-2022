//generate a random number
//increments by 1
//square the number
//print the result on the console

const generateIt = () => {
    let num = Math.round(Math.random() * 100);
    if (num > 50) {
        return new Promise((resolve, reject) => resolve(num));
    } else {
        return new Promise((resolve, reject) => reject(`Too small a number: ${num}`));
    }
    
};
const incrementIt = (num: number) => {
    let value = num + 1;
    return new Promise((resolve, reject) => resolve(value));
};

const squareIt = (num: number) => {
    let value = num * num;
    return new Promise((resolve, reject) => resolve(value));
};

const printResult = (result: number) => console.log("Result", result);

async function doSomethingElse() {
    await generateIt()
     .then((num: number) => incrementIt(num))
     .then((num: number) => squareIt(num))
     .then((num: number) => printResult(num))
     .catch(res => console.log("Error", res));
   
    console.log("end of doSomethingElse");
}
doSomethingElse();
//console.log("end of program");