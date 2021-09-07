"use strict";
/* global assert calculator */

/* comment out the following for the browser */
const assert = require("assert");  //always need this with node
const myExports = require("./calculator.js");  //with node need the name of your file with your functions here
const calculator = myExports.calculator;  //do this for all of the functions used in the Mocha tests




describe("test calculator with values 2, 3", function () {
    calculator.setValues(2, 3);  //values for the tests

    it("checks initial values 2 and 3", function () {
        assert.strictEqual(calculator.a, 2);
        assert.strictEqual(calculator.b, 3);
    });

    it("when 2 and 3 are entered, the sum is 5", function () {
        assert.strictEqual(calculator.sum(), 5);
    });

    it("when 2 and 3 are entered, the product is 6", function () {
        assert.strictEqual(calculator.mul(), 6);
    });


});


