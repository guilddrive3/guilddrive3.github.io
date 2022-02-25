"use strict";  


/**
 * 
 * @param {Array} arr is any array
 * @returns {Array} same array but reversed elements
 * Swap the first and last element, 2nd and 2nd to last, etc
 */
function reverseArrayInPlace(arr){

    let temp;
    for (let i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }

    return arr;
}

/*
4.	Reverse an Array 
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and 
reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, 
reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method. 
*/
const assert = require("assert");
describe("reverseArray", function () {

    it("tests reverse even number elements", function () {
        assert.deepEqual(reverseArrayInPlace(["A", "B", "C", "D"]), ["D", "C", "B", "A"]);
    });
    it("tests reverse odd number elements", function () {
        assert.deepEqual(reverseArrayInPlace([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    });
    it("tests that the original array is returned", function () {
        const testArr = [1, 2, 3, 4, 5];
        const reversedArray = reverseArrayInPlace(testArr);
        assert.strictEqual(reversedArray, testArr);
        testArr.pop();
        assert.strictEqual(reversedArray, testArr);
        assert.deepEqual(reversedArray, testArr);
    });
});
