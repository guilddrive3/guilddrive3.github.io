/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai";

import { copyArray, concat, findMin, findProduct } from "../src/spread.js";



/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Combine several objects into a single object
*/


describe("spread operator tests", function () {
    it("tests clone array", function () {
        const oldArr = [1, 2, 3];
        const newArr = copyArray(oldArr);
        assert.deepEqual(newArr, oldArr);
       // oldArr.push[4];
        newArr.push(4);
        assert.deepEqual(oldArr, [1, 2, 3]);
    });

    it("tests concatenate arrays", function () {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        assert.deepEqual(concat(arr1, arr2), [1, 2, 3, 4, 5, 6]);
    });

    it("tests Math.min", function () {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6, 7, 8, 0];
        assert.strictEqual(findMin(...arr1), 1);
        assert.strictEqual(findMin(...arr2), 0);
    });

    it("tests rest operator in function call", function () {
        const arr1 = [1, 2, 3];
        const arr2 = [1,2,3,4,5];
        assert.strictEqual(findProduct(1,2), 2);
        assert.strictEqual(findProduct(...arr1), 6);
        assert.strictEqual(findProduct(...arr2), 120);
    });

});