
"use strict"


const functionsModule = require("./allFunctions.js");
const computeSalesCommission = functionsModule.computeSalesCommission;
const compoundInterest = functionsModule.compoundInterest;
const calcDownpayment = functionsModule.calcDownpayment;
const sumDigit = functionsModule.sumDigit;
const multDigit = functionsModule.multDigit;
const convertFahrenheit = functionsModule.convertFahrenheit;
const calcDistance = functionsModule.calcDistance;

const assert = require("assert");
//const { describe } = require("node:test");
// const { describe, it } = require("node:test");
//const { describe, it } = require("node:test");




describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
});
//
// describe compoundInterest
describe("test of compoundInterest", function () {
    it("test balance of 100,10,1 ", function () {
        assert.equal(compoundInterest(100, 10, 1).toFixed(2), 110.47)
    });
    it("test balance of 100000,5,10 ", function () {
        assert.equal(compoundInterest(10000, 5, 10).toFixed(2), 16470.09)
    });

});
//describe downPayment

describe("test of Down payment", function () {
    it("test downpayment for cost of 40000", function () {
        assert.strictEqual(calcDownpayment(40000), 2000)
    });
    it("test downpayment for cost of 40000", function () {
        assert.strictEqual(calcDownpayment(50000), 2500)
    });
});

//describe sumDigit

describe("test the sum of digits of a number", function () {
    it("test sum of 103 digits", function () {
        assert.strictEqual(sumDigit(102), 3)
    });
    it("test sum of 1234 digits", function () {
        assert.strictEqual(sumDigit(1234), 10)
    });
});
//describe multDigit
describe("test the product of digits of a number", function () {
    it("test product of 103 digits", function () {
        assert.strictEqual(multDigit(102), 0)
    });
    it("test product of 122 digits", function () {
        assert.strictEqual(multDigit(122), 4)
    });
});

//describe farheneight
describe("convert farenheigt to celcius", function () {
    it("test conversion of 32 f to celc ", function () {
        assert.equal(convertFahrenheit(32), 0)
    });
    it("test conversion of 0 f to celc", function () {
        assert.equal(convertFahrenheit(0), -17.7778)
    });
});

//
describe("calculate distance", function () {
    it("test 0, 0, 5, 5 ", function () {
        assert.equal(calcDistance(0, 0, 5, 5), 7.07)
    });

});