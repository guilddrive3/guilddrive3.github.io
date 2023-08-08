/* eslint-disable require-jsdoc */

import { Account } from "./account.js";
import { CheckingAccount } from "./checkingaccount.js";
import { SavingsAccount } from "./savingsaccount.js";
    


/**
 * Bank class contains all the accounts
 */
export class Bank{


    /**
     * constructor function for the bank
     */
    constructor(){
        this._accounts = [];

    }

    /**
     * create a new plain account object and add it to the bank._accounts array
     * @returns {null} it returns null
     */
    addAccount(){
        const accNum = Bank.accountNumber;
        Bank.accountNumber += 1;
        const newAcc = new Account(accNum);
        this._accounts.push(newAcc);
        return null;
    }

    /**
     * 
     * @param {Number} interest is the interest rate on saving acc
     * @returns {null} returns null
     */
    addSavingsAccount(interest){
        const accNum = Bank.accountNumber;
        Bank.accountNumber += 1;
        const newAcc = new SavingsAccount(accNum, interest);
        this._accounts.push(newAcc);
        return null;
    }

    /**
     * 
     * @param {Number} overdraft is the amount that the bank lets you overdraw after 0 dollar balance in the acc
     * @returns {null} returns null
     */
    addCheckingAccount(overdraft){
        const accNum = Bank.accountNumber;
        Bank.accountNumber += 1;
        const newAcc = new CheckingAccount(accNum, overdraft);
        this._accounts.push(newAcc);
        return null;
    }

    /**
     * 
     * @param {Number} number is the account number
     * @returns {Undefined} there is no return value set
     */
    closeAccount(number){
        this._accounts = this._accounts.filter(acc => acc._number !== number);        
    }

    /**
     * 
     * @returns {undefined}
     */
    accountReport(){
        //return this._accounts.forEach(acc => acc.toString()) + "\n";
        let report = this._accounts.map(acc => acc.toString() );
        //return report;
        return report.join("\n")+ "\n";
    }

    /**
     * 
     * @returns {undefined}
     */
    endOfMonth(){
        let eom = this._accounts.map(acc => acc.endOfMonth());
        return eom.join("\n");
    }
}

Bank.accountNumber = 1;

/*
const bank = new Bank();
bank.addAccount();
bank.addSavingsAccount(2.5);
bank.addCheckingAccount(500);
bank.closeAccount(1);
console.log(bank.accountReport());

console.log("SavingsAccount 2: balance: 0 interest: 2.5\nCheckingAccount 3: balance: 0 overdraft limit: 500\n"); */

