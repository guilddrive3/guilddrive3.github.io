//"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { pow }; //comma separated list of functions or objects to export


/**
 * @param {number} num is any number
 * @param {number} exponent is a positive integer
 * @returns {number}  number to the power of the exponent
 */
export function pow(num, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = result * num;
    }
    return result;
}
