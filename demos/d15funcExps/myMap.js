"use strict";

/**
 * @param {Array} testArray test array 
 * @param {function} testFunction helper function name
 * @returns {Array} creates a new array with function mapped to each element
 */
 function myMap(testArray, testFunction) {

    let newArray = [];
    for (const element of testArray){
        newArray.push(testFunction(element));
    }
    return newArray;
}

console.log(myMap([1,2,3,4], element => 500 * element + 77));