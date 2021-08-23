"use strict";

const arr = [1, 2, 3, 4, 5];
/**
 * 
 * @param {Array} arr to be processed
 * @param {*} cbk to map the elements
 * @returns {Array} of mapped elements
 * make new array
 * loop through arr
 *  - call cbk(eachElement) and get return value and push it into new array
 *  - return the resulting new array
 */
function myMap(arr, cbk) {
 //implementation needed
}

const dblFun = (num, index) => index + ": " + (num * 2);
const squareFun = num => num * num;

console.log("expect [2, 4, 6,8,10] ", arr.map(dblFun));
console.log("expect [2, 4, 6,8,10] ", myMap(arr, dblFun));

console.log("expect [1, 4, 9, 16, 25] ", arr.map(squareFun));
console.log("expect [1, 4, 9, 16, 25] ", myMap(arr, squareFun));

/**
 * 
 * @param {Array} arr to be processed
 * @param {Function} cbk callback
 * @param {*} initialVal value for the reduction

 * @returns {*} the reduction of the array
 * go through the array, call cbk with accumulator and element
 * return value of cbk becomes accumulator for next loop
 */
function myReduce(arr, cbk, initialVal) {
    let accumulator = initialVal;
    for (const element of arr){
        accumulator = cbk(accumulator, element);
    }
    return accumulator;
}

const sumFun = (accum, val) => accum + val;
const mulFun = (accum, val) => accum * val;


console.log("expect: 15: ", arr.reduce(sumFun, 0));
console.log("expect: 15: ", myReduce(arr, sumFun, 0));

console.log("expect: 120: ", arr.reduce(mulFun, 1));
console.log("expect: 120: ", myReduce(arr, mulFun, 1));

