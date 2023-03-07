/* comment out the import assert line when running in the browser */
//import assert from "node:assert/strict"; 

import {Calculator} from "./app.js";  //do this for all of the app.js functions used in the Mocha tests

describe("calculator from constructor function", function () {
    let calc;  
    before(function () {
        calc = new Calculator();
        calc.setValues(20, 30);
    });

    it("when 20 and 30 are entered, the sum is 50", function () {
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

/*
Write a constructor function Accumulator(initialValue, increment).  The object it creates should:
•	Store the current accumulated value in a property currentValue.  The constructor should set this to be initialValue.
•	The accumulate method should increase the currentValue by the increment.
•	The report method should return the currentValue.
*/
describe("accumulator", function () {


    it("checks initialValue and increment", function () {
        const accumulator = new Accumulator(5, 10);
        assert.strictEqual(accumulator.currentValue, 5);
        assert.strictEqual(accumulator.increment, 10);
    });

    it("checks accumulate", function () {
        const accumulator = new Accumulator(5, 10);
        accumulator.accumulate();
        accumulator.accumulate();
        assert.strictEqual(accumulator.currentValue, 25);
        assert.strictEqual(accumulator.increment, 10);
    });    

    it("checks report", function () {
        const accumulator = new Accumulator(5, 10);
        assert.strictEqual(accumulator.report(), 5);
    });    

});