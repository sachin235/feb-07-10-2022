function add(... numbers: number[]): void {
    let total = 0;
    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log("Sum", total);
}

add(1,5,34,324,324,235,2353);
add(21,65);
add(1,55,83);


function greatest(... numbers: number[]): void {
    let max = numbers.length > 0 ? numbers[1] : undefined;
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    console.log("Max", max);
}

greatest(1,5,34,324,324,235,2353);
greatest(21,65);
greatest(1,55,83,9,667);