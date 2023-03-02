/* eslint-disable no-irregular-whitespace */


import assert from "node:assert/strict"; 
import {checkPrime, ssReverse}  from "./mochaModulesCode.js";   



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