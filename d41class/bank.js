/* eslint-disable require-jsdoc */

import { Account } from "./account.js";
import { CheckingAccount } from "./checkingaccount.js";
import { SavingsAccount } from "./savingsaccount.js";
    



export class Bank{
    constructor(){
        this._accounts = [];

    }

    /**
     * create a new plain account object and add it to the bank._accounts array
     */
    addAccount(){
        const accNum = Bank.accountNumber;
        Bank.accountNumber += 1;
        const newAcc = new Account(accNum);
        newAcc.deposit(10000);

        this._accounts.push(newAcc);
        return null;
    }

}



Bank.accountNumber = 1;










