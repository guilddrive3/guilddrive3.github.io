"use strict";
/* Write a function named testPrime that returns true when the argument to the function is a prime number, otherwise returns false.
(Best practice to first write the steps in English )
E.g., “defining table”
Now call the function to test if user input is prime or not.
*/
/* defining table
inputs:  number to test for prime
outputs:  true if prime else false
processing: loop through numbers up to input and see if they evenly divide--i.e., 0 remainder
*/
/**
 * 
 * @param {number} num is integer 
 * @returns {boolean} true if prime
 */
function testPrime(num){
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;

}

console.log("expect true: ", testPrime(11));
console.log("expect false: ", testPrime(14));