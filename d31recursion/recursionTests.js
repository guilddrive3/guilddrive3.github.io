"use strict";
/* global require */

/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.
*/
const assert = require("assert");  //always need this with node
const myExports = require("./recursion.js");  //with node need the name of your file with your functions here
const sumTo = myExports.sumTo;  //do this for all of the functions used in the Mocha tests
const factorial = myExports.factorial; 
const fibonacci = myExports.fibonacci; 

/* the following are for Thursday */
const outputList = myExports.outputList; 
const outputListLoop = myExports.outputListLoop; 
const reverseList = myExports.reverseList; 
const reverseListLoop = myExports.reverseListLoop; 


let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

describe("recursion tests", function () {
    it("tests summing by recursion", function () {
        assert.strictEqual(sumTo(5), 15);
        assert.strictEqual(sumTo(10), 55);
    });
    it("tests factorial", function () {
        assert.strictEqual(factorial(5), 120);
        assert.strictEqual(factorial(10), 3628800);
    });

    it("tests fibonacci 10", function () {
        assert.strictEqual(fibonacci(10), 55);
    });
    it("tests fibonacci 30", function () {
        assert.strictEqual(fibonacci(30), 832040);
    });
    it("recursive version prints 1 2 3 4 to console", function () {
        assert.strictEqual(outputList(list), "1 2 3 4 printed to console");
    });
    it("iterative version prints 1 2 3 4 to console", function () {
        assert.strictEqual(outputListLoop(list), "1 2 3 4 printed to console");
    }); 

    it("recursive version prints 4 3 2 1 to console", function () {
        assert.strictEqual(reverseList(list), "4 3 2 1 printed to console");
    });    
    it("loop version prints 4 3 2 1 to console", function () {
        assert.strictEqual(reverseListLoop(list), "4 3 2 1 printed to console");
    });    

});

