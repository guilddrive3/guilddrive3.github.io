"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.

module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests
*/
function myMap(arr, func) {
    const newArr = [];
    for (const element of arr) {
        newArr.push(func(element));
    }
    return newArr;
}

function myFilter(arr, func) {
    const newArr = [];
    for (const element of arr) {
        if (func(element)) {
            newArr.push(element);
        }
        
    }
    return newArr;
}


function myReduce(arr, func, initialValue) {
    let accumulator = initialValue;
    for (const element of arr) {
        accumulator = func(accumulator, element);         
    }
    return accumulator;
}