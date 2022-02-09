class Book {
    constructor(private _title: string, public price: number) { //Shortcut to declaring and initializing members
    }
    get title(): string {
        return this._title;
    }
    private static _maxPrice: number = 1000;
    public static get maxPrice(): number {
        return this._maxPrice;
    } 
}

let b1: Book = new Book("TS", 20);
console.log(b1.title, b1.price);
console.log(Book.maxPrice);
