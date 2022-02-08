function write(data: string = 'Some code'): void {
    //console.log("Writing " +  data);
    console.log(`Writing ${data}`); //Template strings
}
write('TS code');
write();

function read(book: string): string {
    return `Reading ${book}`;
}
console.log(read('Typescript hooks'));