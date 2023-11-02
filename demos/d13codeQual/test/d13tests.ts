/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai"
import { isVowel } from "../src/vowel"
import {  computeSalesCommission, compoundInterest } from "../src/sales.js"


describe("isVowel", function () {

    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });

    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });    
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });          

    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });

    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});

describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
        assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
        assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
});

describe("test of compoundInterest", function(){
    it("tests $100 for 1 year at 10% monthly compound", function(){
        const exact = compoundInterest(100, 10, 1);
        assert.strictEqual(+exact.toFixed(2), 110.47 );
    });
    it("tests $10000 for 5 years at 10% monthly compound", function(){
        const exact = compoundInterest(10000, 5, 10);
        assert.strictEqual(+exact.toFixed(2), 16470.09 );
    });
});

