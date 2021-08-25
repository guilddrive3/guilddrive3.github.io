"use strict";
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.  */

const assert = require("assert");  //always need this with node
const myExports = require("./funTests.js");  //with node need the name of your file with your functions here
const myMap = myExports.myMap;  //do this for all of the functions used in the Mocha tests
const myFilter = myExports.myFilter;
const myReduce = myExports.myReduce;



describe("map filter reduce", function () {
    let testArray = null;
    beforeEach(function() {
        // runs before each test in this block
        testArray = [1, 2, 3];
    });
    afterEach(function() {
        // runs after each test in this block
        assert.deepEqual(testArray, [1, 2, 3]);  //all functions in this block should be pure
    });
    /* eslint-disable */
    it("tests map with double", function () {
        function double(number) { return 2 * number;}
        assert.deepEqual(myMap([1, 2, 3], double), [2, 4, 6]);
    });

    it("tests map with cube", function () {
        function cube(number) { return number * number * number;}
        assert.deepEqual(myMap([1, 2, 3], cube), [1, 8, 27]);
    });

    it("tests filter with even", function () {
        function even(number) { return (number % 2 === 0);}
        assert.deepEqual(myFilter([1, 2, 3], even), [2]);
    });

    it("tests filter with > 1", function () {
        function greater1(number) { return (number > 1);}
        assert.deepEqual(myFilter([1, 2, 3], greater1), [2, 3]);
    });

    it("tests reduce with sum", function () {
        function sum(acc, number) { return (number + acc);}
        assert.strictEqual(myReduce([1, 2, 3], sum, 0), 7);
    });

    it("tests reduce with mult", function () {
        function mult(acc, number) { return (number * acc);}
        assert.strictEqual(myReduce([1, 2, 3], sum, 0), 6);
    });

});