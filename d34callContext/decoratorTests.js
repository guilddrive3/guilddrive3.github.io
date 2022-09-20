"use strict";
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.  */

const assert = require("assert");  //always need this with node
const myExports = require("./decorator.js");  //with node need the name of your file with your functions here
const spy = myExports.spy;  //do this for all of the functions used in the Mocha tests


describe("spy", function() {
    it("records calls into its property", function() {
      function work() {}
  
      work = spy(work);
      assert.deepEqual(work.calls, []);
  
      work(1, 2);
      assert.deepEqual(work.calls, [
        [1, 2]
      ]);
  
      work(3, 4);
      assert.deepEqual(work.calls, [
        [1, 2],
        [3, 4]
      ]);
    });
  
    it("transparently wraps functions", function() {
  
      let sum = (a, b) => a + b;
  
      let wrappedSum = spy(sum);
  
      assert.equal(wrappedSum(1, 2), 3);
      assert.deepEqual(wrappedSum.calls, [ [1,2]]);
    });
  
  
    it("transparently wraps methods", function() {
  
      let calc = {
        sum: (a, b) => a + b
      };
  
      calc.wrappedSum = spy(calc.sum);
  
      assert.equal(calc.wrappedSum(1, 2), 3);
      assert.deepEqual(calc.wrappedSum.calls, [ [1,2]]);
   
    });

});