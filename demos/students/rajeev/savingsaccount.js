

import { Account } from "./account.js";



/**
 * 
 */
export class SavingsAccount extends Account{

    /**
     * 
     * @param {Number} number is the number from construction function
     * @param {Number} interest is the interest rate for saving acc
     */
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }

    /**
     * @description Adds interest amount to the account
     * @returns {nothing} Nothing
    */
    addInterest(){
        const balance = this.getBalance();
        const interestAmt = balance * (this._interest/100);
        this.deposit(interestAmt);
        return interestAmt;
    }

    /**
     * 
     * @returns {Number} interest 
     */
    getInterest(){
        return this._interest;
    }

    /**
     * 
     * @param {Number} interest is the interest rate for the savings acc
     * @returns {empty} nothing
     */
    setInterest(interest){
        this._interest = interest;
    }

    /**
     * @returns {String} returns the message that tells the balance and interests
     */
    toString(){
        return "SavingsAccount " + this._number + ": balance: " + this.getBalance() + " interest: " + this.getInterest();

    }

    /**
     * 
     * @returns {string} is a message that tells the balance at the end of the month after adding the interest rate.
     */
    endOfMonth() {
        const interestAdded = this.addInterest();
        return  "Interest added " + "SavingsAccount " + this._number + ": balance: " + this.getBalance() + " interest: " + interestAdded;  
    }
}

/*
let savings = new SavingsAccount(1, 5);
savings.setInterest(5);
            savings.deposit(100);
            savings.addInterest();
            savings.withdraw(5);
            console.log(savings.endOfMonth());
           // endOfMonth(), "Interest added SavingsAccount 1: balance: 105 interest: 5"); */