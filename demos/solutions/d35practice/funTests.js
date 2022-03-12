"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
//module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {*} arr  the given array
 * @param {*} func the function applied
 * @returns {array} returnArray return the result
 */
function myMap(arr, func) {
    let returnArray=[];
    for (let elem of arr){
        returnArray.push(func(elem));
    }
    return returnArray;
}

/**
 * 
 * @param {*} arr  the given array
 * @param {*} func the funtion applied
 * @returns {array} array of results
 */
function myFilter(arr, func) {
    let myArr=[];
    for(let elem of arr){
        if(func(elem)){
            myArr.push(elem);
        }
    }
    return myArr;
}

/**
 * 
 * @param {*} arr the given array
 * @param {*} func the function applied
 * @param {*} initialValue the initial value of result
 * @returns {number} the result of func
 */
function myReduce(arr, func, initialValue) {
    for (let elem of arr){
        initialValue = func(initialValue,elem);
    }
    return initialValue;
    }