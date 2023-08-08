/*  eslint-disable require-jsdoc */


class Bank {
    static bar = "hi bar";
    constructor() {
        this.accounts = [];
    }
    deposit(amt, acct) {//make a deposit method};
    }
}

Bank.foo = "hi foo";

console.log("own prop: ", Object.entries(Bank));  //[ [ 'bar', 'hi bar' ], [ 'foo', 'hi foo' ] ]

//https://stackoverflow.com/questions/1535631/static-variables-in-javascript