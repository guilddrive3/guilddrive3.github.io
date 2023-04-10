


import { Account } from "./account.js";



/**
 * 
 */
export class CheckingAccount extends Account {

    /**
     * 
     * @param {Number} number is the checking acc number
     * @param {Number} overdraft is amount a person allowed to temp withdraw beyond what they have
     */
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    /**
     * 
     * @param {Number} overdraft is amount a person allowed to temp withdraw beyond what they have
     * @returns {undefined}
     */
    setOverdraft(overdraft) {
        this._overdraft = overdraft;
    }

    /**
     * 
     * @returns {Number} is the overdraft amount.
     */
    getOverdraft() {
        return this._overdraft;
    }


    /**
     * Method to take money out of the account
     * 
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient funds (balance)
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance + this._overdraft)) {
            throw Error("Insufficient funds, cannot withdraw beyond overdraft limit");
        }
        this._balance -= amount;
    }


    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "CheckingAccount " + this.getNumber() + ": balance: " + this.getBalance() + " overdraft limit: " + this.getOverdraft();
    }

    /**
     * Performs needed actions at the end of the month
     * 
     * @returns {undefined}
     */
    endOfMonth() {
        if (this._balance > 0) {
            return ""; // does nothing
        } else {
            return "Warning, low balance " + this.toString();
        }
    }

}









