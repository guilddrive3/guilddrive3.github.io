"use strict";
const assert = require("assert");
/**
 * calculates downpayment.
 * @param {Number} totalCost - total cost of house.
 * @returns{Number} total downpayment
 */
function calcDownpayment(totalCost) {
    let downPayment = 0;
    if (totalCost > 0 && totalCost < 50000) {
        downPayment = 5 / 100 * totalCost;
    } else if (totalCost >= 50000 && totalCost < 100000) {
        downPayment = 10 / 100 * (totalCost - 50000) + 2500;
    } else if (totalCost >= 100000 && totalCost < 200000) {
        downPayment = 15 / 100 * (totalCost - 100000) + 7500;
    } else if (totalCost >= 200000) {
        downPayment = 10 / 100 * (totalCost - 200000) + 5000;
    }
    return downPayment;
}

describe("test calculate down payment", function () {
    it("total cost 40000", function () {
        assert.strictEqual(calcDownpayment(40000), 2000);
    });
    it("total cost 50000", function () {
        assert.strictEqual(calcDownpayment(50000), 2500);
    });
    it("total cost 100000", function () {
        assert.strictEqual(calcDownpayment(100000), 7500);
    });
    it("total cost 200000", function () {
        assert.strictEqual(calcDownpayment(200000), 5000);
    });
});