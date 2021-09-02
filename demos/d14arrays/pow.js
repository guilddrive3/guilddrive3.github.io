"use strict";

/**
 * 
 * @param {Number} num is any number
 * @param {Number} exponent is a positive integer
 * @returns {Number}  number to the power of the exponent
 */
function pow(num, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = result * num;
    }
    return result;
}