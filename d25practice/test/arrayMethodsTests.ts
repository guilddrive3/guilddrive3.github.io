/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai";

import {  filterRange, map2fullName} from "../src/methods.js";

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

