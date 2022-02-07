function eat(item1: string, item2: string): void {
    console.log("Eating", item1, item2);
}

eat("Rice", "Bread");

function work(hours: number = 8): string {
    return 'Working ' + hours + ' hours';
}
console.log(work(12));
console.log(work());