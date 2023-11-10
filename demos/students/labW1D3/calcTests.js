"use strict";

/* global assert Calculator */




describe("calculator from constructor function", function () {
    let calc;  
    before(function () {
        calc = new Calculator();
        calc.a = 20;
        calc.b = 30;
    });

    it("when 2 and 3 are entered, the sum is 50", function () {
        assert.strictEqual(calc.a, 20);
        assert.strictEqual(calc.b, 30);
        assert.strictEqual(calc.sum(), 50);
    });

    it("when 20 and 30 are entered, the product is 600", function () {
        assert.strictEqual(calc.a, 20);
        assert.strictEqual(calc.b, 30);
        assert.strictEqual(calc.mul(), 600);
    });
});