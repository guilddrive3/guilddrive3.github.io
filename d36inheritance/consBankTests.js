"use strict";
/* Modify your bank solution from yesterday to be a constructor function instead of an object factory. 

You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page. */

const assert = require("assert");  //always need this with node
const myExports = require("./bank.js");  //with node need the name of your file with your functions here
const MakeBank = myExports.MakeBank;  //do this for all of the functions used in the Mocha tests


describe("bank tests", function () {

  const bank = new MakeBank();
    it("bankBalance", function () {
        assert.strictEqual(bank.bankBalance(), 85);
    });

    it("transactionsDB is private", function () {
        assert.strictEqual(bank.transactionsDB in bank, false);
    });
});



