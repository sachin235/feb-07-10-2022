class Transaction {
    public date: Date; 
    constructor(public type: String, public amount: number) {
        this.date = new Date();
    }
}

class Account {
    private withdrawCount: number;
    private transactions: Transaction[];

    constructor(public readonly accountNumber: number, private _balance: number = 10000) {
        if (this._balance < 10000) {
            throw new Error(`Minimum opening balance should be 10000`);
        }
        this.withdrawCount = 0;
        this.transactions = [];
    }
    public get balance(): number {
        return this._balance;
    }
    deposit(amount: number) {
        this._balance += amount;
        this.transactions.push(new Transaction("Credit", amount));
    }
    withdraw(amount: number) {
        if(amount > this._balance) {
            throw new Error(`Error: Insufficient balance ${this._balance}`);
        }
        this._balance -= amount;
        this.transactions.push(new Transaction("Debit", amount));
        this.withdrawCount++;
        if (this.withdrawCount > 3) {
            let fee = amount * 0.005;
            this._balance -= fee;
            this.transactions.push(new Transaction("Fees", fee));
        }
    }
    printStatement() {
        this.transactions.forEach(txn => {
            console.log(`${txn.type} for  Amount: Rs.${txn.amount} on ${txn.date.toLocaleTimeString()}`);
        });
    }
}

let acc = new Account(239847398, 20000);
acc.deposit(10000);
acc.deposit(10000);
acc.withdraw(100);
acc.withdraw(100);
acc.withdraw(100);
acc.withdraw(100);
acc.withdraw(100);
acc.printStatement();
console.log(`Balance of ${acc.accountNumber} is Rs.${acc.balance}`);
// acc.accountNumber = 123123;
try {
    acc.withdraw(1009879879);    
} catch (er: any) {
    console.warn(er.message);
}
let acc2 = new Account(231232, 1212);