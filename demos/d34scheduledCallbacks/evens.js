"use strict";
/* 
write a function, multiplyEvens, that can be called with any number of arguments and 
returns the product of the even arguments
do first using the arguments object
then using …rest parameter
*/


console.log("expect 48: ", multiplyEvens(1, 6, 3, 4, 17, 2));

/**
 * 
 * @returns {number} product of arguments that are even numbers 
 */
function multiplyEvens(...argsArray){
//function multiplyEvens(){
    let evensProduct = 1;
    // for (const num of arguments){
    //     if (num % 2 === 0){
    //         evensProduct = evensProduct * num;
    //     }
    for (const num of argsArray){
        if (num % 2 === 0){
            evensProduct = evensProduct * num;
        }
    }

    return evensProduct;
}


//console.log(multiplyEvens() );