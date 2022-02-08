function add(a: number, b: number): number {
    return a + b;
}

const sum = (a: number, b: number) => a + b; //return keyword is not neccessary if the body is one-liner
console.log(sum(1, 2));
console.log(typeof(sum));

const aPlusBWholeSquared = (a: number, b: number) => {
    let aSq = a * a;
    let bSq = b * b;
    let twoab = 2 * a * b;
    return aSq + bSq + twoab;
};
