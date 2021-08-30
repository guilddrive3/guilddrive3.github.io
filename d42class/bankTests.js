"use strict";
/* global require describe it assert  Account SavingsAccount CheckingAccount Bank*/

/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.   */

const assert = require("assert");  //always need this with node

const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
const bnk = require("./bank.js");
const Bank = bnk.Bank;
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount;  

describe("Account class", () => {
    let account = undefined;
    describe("constructor(number)", () => {
        it("takes a number which becomes the account number", () => {
            account = new Account(1);
            assert.equal(account.getNumber(), 1);
            assert.equal(account.constructor, Account);
        });
    });

    describe("getNumber() method", () => {
        it("returns the account number", () => {
            assert.equal(account.getNumber(), 1);
        });
    });

    describe("getBalance() method", () => {
        it("returns the current account balance", () => {
            assert.equal(account.getBalance(), 0);
            account.deposit(5);
            assert.equal(account.getBalance(), 5);
        });
    });

    describe("deposit(amount) method", () => {
        it("adds amount to the current balance", () => {
            assert.equal(account.getBalance(), 5);
            account.deposit(5);
            assert.equal(account.getBalance(), 10);
        });
        it("throws a RangeError if you give a number <= 0", () => {
            let makeError = () => {
                account.deposit(-1);
            };
            assert.throws(makeError, RangeError, "Deposit amount has to be greater than zero");
        });
    });

    describe("withdraw(amount) method", () => {
        it("removes amount from the current balance", () => {
            assert.equal(account.getBalance(), 10);
            account.withdraw(4);
            assert.equal(account.getBalance(), 6);
        });
        it("throws a RangeError if you give a number <= 0", () => {
            let makeError = () => {
                account.withdraw(-1);
            };
            assert.throws(makeError, RangeError, "Withdraw amount has to be greater than zero");
        });
        it("throws an Error if you try to withraw money you don't have", () => {
            let makeError = () => {
                account.withdraw(1000);
            };
            assert.throws(makeError, Error, "Insufficient funds");
        });
    });

    describe("toString() method", () => {
        it("returns a string representation of the account", () => {
            assert.equal(account.toString(), "Account 1: balance 6");
        });
    });

    describe("endOfMonth() method", ()=>{
        it("returns an empty string", ()=>{
            assert.equal(account.endOfMonth(), "");
        });
    });
});


describe("SavingsAccount", () => {
    let savings = undefined;
    describe("constructor(number, interest)", () => {
        it("takes a number and an interest rate and makes a SavingsAccount", () => {
            savings = new SavingsAccount(1, 5);
            assert.equal(savings.getNumber(), 1);
            assert.equal(savings.getInterest(), 5);
            assert.equal(savings.constructor, SavingsAccount);
        });
    });
    describe("interest getter / setter", () => {
        it("can get the interest rate for this account", () => {
            assert.equal(savings.getInterest(), 5);
        });
        it("can set the interest rate for this account", () => {
            savings.setInterest(6);
            assert.equal(savings.getInterest(), 6);
        });
    });

    describe("addInterest() method", () => {
        it("adds the calculated interest to this account", () => {
            savings.setInterest(5);
            savings.deposit(100);
            savings.addInterest();
            assert.equal(savings.getBalance(), 105);
        });
    });

    describe("toString() method", () => {
        it("returns a string representation of the SavingsAccount", () => {
            assert.equal("SavingsAccount 1: balance: 105 interest: 5", savings.toString());
        });
    });

    describe("endOfMonth() method", ()=>{
        it("returns a string saying that interest was added", ()=>{
            savings.withdraw(5);
            assert.equal(savings.endOfMonth(), "Interest added SavingsAccount 1: balance: 105 interest: 5");
        });
    });

});

describe("CheckingAccount", () => {
    let checking = undefined;
    describe("constructor(number, overdraft)", () => {
        it("takes a number and the overdraft limit and makes a checking account", () => {
            checking = new CheckingAccount(1, 200);
            assert.equal(checking.getNumber(), 1);
            assert.equal(checking.getOverdraft(), 200);
            assert.equal(checking.constructor, CheckingAccount);
        });
    });
    describe("overdraft getter / setter", () => {
        it("can get the overdraft limit for this account", () => {
            assert.equal(checking.getOverdraft(), 200);
        });
        it("can set the overdraft limit for this account", () => {
            checking.setOverdraft(250);
            assert.equal(checking.getOverdraft(), 250);
        });
    });
    describe("withdraw(amount) method", () => {
        it("can withdraw into negative up to the overdraft limit", () => {
            checking.withdraw(200);
            assert.equal(checking.getBalance(), -200);
        });
        it("throws an error if you go beyond the limit", () => {
            let makeError = () => {
                checking.withdraw(100);
            };
            assert.throws(makeError, Error, "Insufficient funds, cannot withdraw beyond overdraft limit");
        });
        it("throws a RangeError if you give a number <= 0", () => {
            let makeError = () => {
                checking.deposit(-1);
            };
            assert.throws(makeError, RangeError, "Deposit amount has to be greater than zero");
        });
    });
    describe("toString() method", () => {
        it("returns a string representation of the SavingsAccount", () => {
            assert.equal("CheckingAccount 1: balance: -200 overdraft limit: 250", checking.toString());
        });
    });
    describe("endOfMonth() method", ()=>{
        it("returns a warning string when the balance is below zero", ()=>{
            assert.equal(checking.endOfMonth(), "Warning, low balance CheckingAccount 1: balance: -200 overdraft limit: 250");
        });
        it("returns an empty string when balance above zero", ()=>{
            checking.deposit(1000);
            assert.equal(checking.endOfMonth(), "");
        });
    });

});


describe("Bank Class", () => {
    let bank = undefined;
    describe("constructor()", () => {
        it("creates a Bank object", () => {
            bank = new Bank();
            assert.equal(bank.constructor, Bank);
            assert.equal(bank._accounts.length, 0);
        });
    });
    describe("addAccount()", () => {
        it("adds an Account object to it array", () => {
            bank.addAccount();
            assert.equal(bank._accounts[0].getNumber(), 1);
            assert.equal(bank._accounts[0].getBalance(), 0);
        });
    });
    describe("addSavingsAccount(interest)", () => {
        it("adds an SavingsAccount object to it array", () => {
            bank.addSavingsAccount(2.5);
            assert.equal(bank._accounts[1].getNumber(), 2);
            assert.equal(bank._accounts[1].getBalance(), 0);
            assert.equal(bank._accounts[1].getInterest(), 2.5);
        });
    });
    describe("addCheckingAccount(overdraft)", () => {
        it("adds an CheckingAccount object to it array", () => {
            bank.addCheckingAccount(500);
            assert.equal(bank._accounts[2].getNumber(), 3);
            assert.equal(bank._accounts[2].getBalance(), 0);
            assert.equal(bank._accounts[2].getOverdraft(), 500);
        });
    });
    describe("closeAccount(number)", () => {
        it("closes the account with the given number", () => {
            bank.closeAccount(1);
            assert.equal(bank._accounts.length, 2);
            assert.equal(bank._accounts[1].getNumber(), 3);
            assert.equal(bank._accounts[1].getBalance(), 0);
            assert.equal(bank._accounts[1].getOverdraft(), 500);
        });
    });
    describe("accountReport()", () => {
        it("returns a string describing all accounts", () => {
            assert.equal(bank.accountReport(), "SavingsAccount 2: balance: 0 interest: 2.5\nCheckingAccount 3: balance: 0 overdraft limit: 500\n");
        });
    });
    describe("endOfMonth()", ()=>{
        it("returns a string with actions related to the accounts", ()=>{
            bank._accounts[0].deposit(100);
            bank._accounts[1].withdraw(100);
            bank.addAccount();
            assert.equal(bank.endOfMonth(), "Interest added SavingsAccount 2: balance: 102.5 interest: 2.5\nWarning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500\n");
        });
    });
});