"use strict";
/* 
write a function, multiplyEvens, that can be called with any number of arguments and returns the product of the even arguments
do first using the arguments object
then using …rest parameter
*/


console.log("expect 48: ", multiplyEvens(1, 6, 3, 4, 17, 2));

/**
 * 
 * @returns {number} product of even arguments 
 */
// function multiplyEvens(){
//     let prod = 1;
//     for (const arg of arguments){
//         if (arg % 2 === 0) {         
//             prod = prod * arg;
//         }
//     }
//     return prod;
// }

/**
 * 
 * @returns {number} product of even arguments 
 */
function multiplyEvens(...args){
    let prod = 1;
    for (const arg of args){
        if (arg % 2 === 0) {         
            prod = prod * arg;
        }
    }
    return prod;
}