/* comment out the import assert line when running in the browser */
import assert from "node:assert/strict"; 

import { spy } from "./decorator.js";


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