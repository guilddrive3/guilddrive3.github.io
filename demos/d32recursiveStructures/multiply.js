"use strict";

/*write a function, multiplyEvens, that can be called with any number of arguments and returns the product of the even arguments
do first using the arguments object
then using …rest parameter
multiplyEvens(1, 6, 3, 4, 17, 2)  48
*/


/**
 * 
 * @param  {...any} params array of all parameters
 * @returns {number} prod of even numbers in arguments
 */
function multiplyEvens(...params) {
    let product = 1;
    for (const element of params) {

        if (element % 2 === 0) {
            product = product * element;
        }
    }
    return product;
}
console.log("expect 8: ", multiplyEvens(1, 2, 3, 4, 5));