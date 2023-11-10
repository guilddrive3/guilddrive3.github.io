"use strict";
/* global assert calculator */





describe("new calculator", function () {
 

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


