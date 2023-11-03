/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai"

//import {double, times100, myMap} from "../src/fnExps.js";
import {double} from "../src/fnExps.js";

/* 1.	1.	Write a function, double, that takes a number and returns 2 times the number..  */
describe("double", function () {
    it("tests double 10", function () {
        assert.strictEqual(double(10), 20);
    });
    it("tests double 0", function () {
        assert.strictEqual(double(0), 0);
    });
    it("tests double -10", function () {
        assert.strictEqual(double(-10), -20);
    });
});

// /*  2.	Write a function times100 that takes a number and returns 100 times the number. */
// describe("times100", function () {
//     it("tests times100 10", function () {
//         assert.strictEqual(times100(10), 1000);
//     });
//     it("tests times100 0", function () {
//         assert.strictEqual(times100(0), 0);
//     });
//     it("tests times100 -10", function () {
//         assert.strictEqual(times100(-10), -1000);
//     });
// });

//     /* 3.	Write a function, myMap, that takes an array and a function and returns a new array that has the function applied to each element of the input array. */
//     describe("myMap", function () {
//         const testArray = [-10, 0, 10, 20];
//         it("tests myMap on double", function () {
//             assert.deepStrictEqual(myMap(testArray, double), [-20, 0, 20, 40]);
//         });
//         it("tests myMap on times100", function () {
//             assert.deepStrictEqual(myMap(testArray, times100), [-1000, 0, 1000, 2000]);
//         });
//     });

//     /* 4.	Demonstrate your myMap function with an anonymous function that triples the input value.  Write this as an anonymous function expression.  
//     Then write it using an arrow expression. */
//     describe("myMap", function () {
//         const testArray = [-10, 0, 10, 20];
//         it("tests myMap on triples anonymous function", function () {
//             assert.deepStrictEqual(myMap(testArray,  /* YOUR CODE HERE */), [-30, 0, 30, 60]);
//         });
//         it("tests myMap on triples arrow function", function () {
//             assert.deepStrictEqual(myMap(testArray, /* YOUR CODE HERE */), [-30, 0, 30, 60]);
//         });
//     });

