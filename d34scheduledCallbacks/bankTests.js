"use strict";
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page. */

const assert = require("assert");  //always need this with node
const myExports = require("./bank.js");  //with node need the name of your file with your functions here
const makeBank = myExports.makeBank;  //do this for all of the functions used in the Mocha tests


describe("bank tests", function () {

  const bank = makeBank();
    it("bankBalance", function () {
        assert.strictEqual(bank.bankBalance(), 65);
    });

    it("transactionsDB is private", function () {
        assert.false(bank.transactionsDB in bank, false);
    });
});



