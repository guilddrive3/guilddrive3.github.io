"use strict";

/**
 * 
 * @param {number} initValue is initial value for the counter closure variable
 * @returns {Function} is the counter function
 */
function makeCounter(initValue) {
    let counter = initValue;

    let incrementFn = function (val) {
        counter += val;
        console.log(counter);
        return counter;
    };
    return incrementFn;
}

let myCount = makeCounter(10);

console.log("expect 20: ", myCount(10));
console.log("expect 30: ", myCount(10));