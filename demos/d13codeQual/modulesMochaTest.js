/* eslint-disable no-irregular-whitespace */
"use strict";

//suppose have many functions to test and want tests in separate file

const assert = require("assert");
/* import from functions.js module */
const functionsModule = require("./functions.js");
const checkPrime =  functionsModule.checkPrime;  
const ssReverse  =  functionsModule.ssReverse;  
describe("checkPrime returns true if argument is prime ", function () {
    it("37 is prime", function () {
        assert.strictEqual(checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(checkPrime(77), false);
    });
});
describe("ssReverse", function () {
    it("[1, 2, 3, 4]", function () {//test array equality 
        assert.deepStrictEqual(ssReverse([1, 2, 3, 4 ]), [4,3,2,1] );
    });  
});