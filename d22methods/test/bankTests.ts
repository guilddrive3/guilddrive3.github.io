/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai";

import {bank} from "../src/bank.js";  //import objects used in the Mocha tests

describe("bank tests", function () {

    it("checks initial balance", function () {
        assert.strictEqual(bank.bankBalance(), 85);
    });

    /* the credit and debit are made in the bank.js file */
    it("balance after credit of 20 and debit of 1000 for customer 1", function () {
        assert.strictEqual(bank.bankBalance(), 85);
        bank.credit(1, 20);
        bank.debit(1, 1000);
        assert.strictEqual(bank.bankBalance(), 105);
    });

});
