"use strict";
/* global assert bank */

/* comment out the following for the browser */
const assert = require("assert");  //always need this with node
const myExports = require("./bank.js");  //with node need the name of your file with your functions here
const bank = myExports.bank;  //do this for all of the functions used in the Mocha tests

describe("bank tests", function () {
 
    it("checks initial balance", function () {
        assert.strictEqual(bank.bankBalance(), 85);
    });

    it("balance after credit of 20 and debit of 1000", function () {
        assert.strictEqual(bank.bankBalance(), 105);
    });

});


