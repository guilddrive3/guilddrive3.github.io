/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai";

import {bank} from "../src/bank.js";  //import objects used in the Mocha tests

describe("bank tests", function () {
    beforeEach(function () {  //before each test, initialise the bank object to make tests independent
        console.log("Reset transactionsDB...");
        bank.transactionsDB = [
            { customerId: 1, customerTransactions: [10, 50, -40] },
            { customerId: 2, customerTransactions: [10, 10, -10] },
            { customerId: 3, customerTransactions: [5, -5, 55] }];
      });

    it("checks initial balance", function () {
        assert.strictEqual(bank.bankBalance(), 85);
    });

    it("checks initial balance of customer 1", function () {
        assert.strictEqual(bank.getBalance(1), 20);
    });

    it("checks initial balance of customer 1 after unallowed debit", function () {
        bank.debit(1, 1000);
        assert.strictEqual(bank.getBalance(1), 20);
    });

    it("checks initial balance of customer 1 after allowed debit", function () {
        bank.debit(1, 10);
        assert.strictEqual(bank.getBalance(1), 10);
    });


    /* the credit and debit are made in the bank.js file */
    it("balance after credit of 20 and debit of 1000 for customer 1", function () {
        assert.strictEqual(bank.bankBalance(), 85);
        bank.credit(1, 20);
        bank.debit(1, 1000);
        assert.strictEqual(bank.bankBalance(), 105);
    });

});
