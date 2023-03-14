/* comment out the import assert line when running in the browser */
import assert from "node:assert/strict"; 

import { inArray, inBetween, byField, makeArmy } from "./closures.js";



describe("inArray", function () {
    let arr = [1, 2, 3, 4, 5, 6, 7];

    it("returns the filter for values in array", function () {
        let filter1To7 = inArray(arr);
        assert.strictEqual(filter1To7(5), true);
        assert.strictEqual(filter1To7(0), false);

    });

    it("tests inArray works with Array.filter", function () {
        let filter1To7 = inArray(arr);
        const arr2 = [0, 5, 10, 6, 100];
        assert.deepEqual(arr2.filter(filter1To7), [5, 6]);
    });
});

describe("inBetween", function () {

    it("returns the filter for values between", function () {
        let filter3to6 = inBetween(3, 6);
        assert.strictEqual(filter3to6(5), true);
        assert.strictEqual(filter3to6(0), false);
    });

    it("tests inBetween works with Array.filter", function () {
        let filter3to6 = inBetween(3, 6);
        const arr2 = [0, 4, 5, 10, 6, 100];
        assert.deepEqual(arr2.filter(filter3to6), [4, 5, 6]);
    });
});


describe("byField", function(){

    let users = [
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" },
    ];
  
    it("sorts users by name", function(){
      let nameSortedKey = [
        { name: "Ann", age: 19, surname: "Hathaway" },
        { name: "John", age: 20, surname: "Johnson"},
        { name: "Pete", age: 18, surname: "Peterson" },
      ];
      let nameSortedAnswer = users.sort(byField("name"));
      assert.deepEqual( nameSortedAnswer, nameSortedKey);
    });
  
    it("sorts users by age", function(){
      let ageSortedKey = [
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" },
        { name: "John", age: 20, surname: "Johnson"},
      ];
      let ageSortedAnswer = users.sort(byField("age"));
      assert.deepEqual(ageSortedAnswer, ageSortedKey);
    });
  
    it("sorts users by surname", function(){
      let surnameSortedKey = [
        { name: "Ann", age: 19, surname: "Hathaway" },
        { name: "John", age: 20, surname: "Johnson"},
        { name: "Pete", age: 18, surname: "Peterson" },
      ];
      let surnameSortedAnswer = users.sort(byField("surname"));
      assert.deepEqual(surnameSortedAnswer, surnameSortedKey);
    });
  

    describe("army", function() {

      let army = makeArmy();
      
    
      it("army[0] shows 0", function() {
        const shooter0 = army[0]();
        assert.strictEqual(shooter0, 0);
      });
    
    
      it("army[5] shows 5", function() {
        const shooter5 = army[5]();
        assert.strictEqual(shooter5, 5);
      });
    

    
    });    
  });