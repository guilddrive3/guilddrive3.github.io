/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai";

import { filterRangeInPlace, filterRange, calculator, unique, groupById, User, map2fullName, sortByAge, findOldest, getAverageAge} from "../src/methods.js";

/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.
*/
describe("filterRange", function () {
    it("returns the filtered values", function () {
        let arr = [5, 3, 8, 1];
        let filtered = filterRange(arr, 1, 4);
        assert.deepEqual(filtered, [3, 1]);
    });

    it("doesn't change the array", function () {
        let arr = [5, 3, 8, 1];
        let filtered = filterRange(arr, 1, 4);
        assert.deepEqual(filtered, [3, 1]);
        assert.deepEqual(arr, [5, 3, 8, 1]);
    });
});

/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
*/
describe("filterRangeInPlace", function () {
    it("returns the filtered values", function () {
        let arr = [5, 3, 8, 1];
        filterRangeInPlace(arr, 1, 4);
        assert.deepEqual(arr, [3, 1]);
    });

    it("doesn't return anything", function () {
        assert.equal(filterRangeInPlace([1, 2, 3], 1, 4), undefined);
    });
});

/* 
Create an “extendable” calculator object.
The task consists of two parts.  (see https://javascript.info/array-methods)
*/
describe("extendable calculator", function () {

    it("calculate(12 + 34) = 46", function () {
        assert.equal(calculator.calculate("12 + 34"), 46);
    });

    it("calculate(34 - 12) = 22", function () {
        assert.equal(calculator.calculate("34 - 12"), 22);
    });

    it("add multiplication: calculate(2 * 3) = 6", function () {
        calculator.addMethod("*", (a, b) => a * b);
        assert.equal(calculator.calculate("2 * 3"), 6);
    });

    it("add power: calculate(2 ** 3) = 8", function () {
        calculator.addMethod("**", (a, b) => a ** b);
        assert.equal(calculator.calculate("2 ** 3"), 8);
    });
});

/* Create a function unique(arr: string[]): string[] that should return an array with unique items of arr. */
describe("unique", function () {
    let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"];
    it("tests unique hare krishnas", function () {
        assert.deepEqual(unique(strings), ["Hare", "Krishna", ":-O"]);
    });
});


/*
Let’s say we received an array of users in the form {id:..., name:..., age... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
see example:  https://javascript.info/array-methods
Such function is really handy when working with server data.
In this task we assume that id is unique. There may be no two array items with the same id.
Please use array .reduce method in the solution.
*/
describe("groupById", function() {

    it("creates an object grouped by id", function() {
      let users: User[] = [
        {id: "john", name: "John Smith", age: 20},
        {id: "ann", name: "Ann Smith", age: 24},
        {id: "pete", name: "Pete Peterson", age: 31},
      ];
  
      assert.deepEqual(groupById(users), {
        john: {id: "john", name: "John Smith", age: 20},
        ann: {id: "ann", name: "Ann Smith", age: 24},
        pete: {id: "pete", name: "Pete Peterson", age: 31},
      });
    });
  
    it("works with an empty array", function() {
      const users: User[] = [];
      assert.deepEqual(groupById(users), {});
    });
  });

    /* write mocha test for map2fullName */
    describe("map2fullName", function() {
        let john = { name: "John", surname: "Smith", id: 1 };
        let pete = { name: "Pete", surname: "Hunt", id: 2 };
        let mary = { name: "Mary", surname: "Key", id: 3 };
        let users = [ john, pete, mary ];

        it("returns the full name", function() {
            assert.deepEqual(map2fullName(users), [
                { fullName: "John Smith", id: 1 },
                { fullName: "Pete Hunt", id: 2 },
                { fullName: "Mary Key", id: 3 }
            ]);
        });
    });

    /* write mocha test for sortByAge */
    describe("sortByAge", function() {
        it("sorts in place by age", function() {
            const john = { name: "John", age: 25 , id: "1"};
            const pete = { name: "Pete", age: 30 , id: "2"};
            const mary = { name: "Mary", age: 28, id: "3" };
            const users: User[] = [ pete, john, mary ];
            sortByAge(users);
            assert.deepEqual(users, [john, mary, pete]);
        });
    });


    /* write mocha test to find oldest user */
    describe("findOldest", function() {
        it("finds the oldest user", function() {
            const john = { name: "John", age: 25 , id: "1"};
            const pete = { name: "Pete", age: 30 , id: "2"};
            const mary = { name: "Mary", age: 28, id: "3" };
            const users: User[] = [ pete, john, mary ];
            assert.deepEqual(findOldest(users), pete);
        });
    });

    /* write mocha test to get average age */
    describe("getAverageAge", function() {
        it("gets the average age", function() {
            const john = { name: "John", age: 25 , id: "1"};
            const pete = { name: "Pete", age: 30 , id: "2"};
            const mary = { name: "Mary", age: 28, id: "3" };
            const users: User[] = [ pete, john, mary ];
            assert.equal(getAverageAge(users).toFixed(3) , "27.667");
        });
    });