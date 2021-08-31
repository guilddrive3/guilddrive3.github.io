"use strict";

/* Write a function named testPrime that returns true when the argument to the function is a prime number, otherwise returns false.
Now call the function to test if user input is prime or not.
*/

/**
 * 
 * @param {Number} num is an integer
 * @returns {boolean} true if prime
 */
function testPrime(num){
    for (let i = 2; i < num; i = i + 1){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("expect true: ", testPrime(17));
console.log("expect false: ", testPrime(51));
