"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */

module.exports = {
    maxOfThree: maxOfThree, sum: sum, multiply: multiply, reverseArrayInPlace: reverseArrayInPlace,
    reverseArray: reverseArray
}; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
    return c;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let tot = 0;
    for (const number of arr) {
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let tot = 1;

    return tot;

}


/**
 * 
 * @param {array} arr is any array
 * @returns {Array} an array with elements reversed
 *
 */
function reverseArray(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[arr.length - i - 1] = arr[i];
    }
    return newArray;
}


/**
 * 
 * @param {array} arr is any array
 * @returns {Array} the same array with elements reversed
 *
 */
function reverseArrayInPlace(arr) {
    const half = Math.floor(arr.length / 2);
    for (let i = 0; i < half; i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }

    return arr;
}