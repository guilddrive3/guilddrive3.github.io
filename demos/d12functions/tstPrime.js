"use strict";

/* Write a function named testPrime that returns true when the argument to the function is a prime number, otherwise returns false.
(Best practice to first write the steps in English )
E.g., “defining table”
Now call the function to test if user input is prime or not.
defining table

inputs: any positive integer
output: true if it is a prime number
process steps:
 loop through numbers from 2 to the number - 1 and see if is divisible by the number
  - if it is divisible by number then return false
  */

/**
 * 
 * @param {*} num is any positive integer
 * @returns {boolean} true if prime
 */
function testPrime(num){
   for (let i = 2; i < num; i++){
    if (num % i === 0){
        console.log("divisible by: ", i);
        return false;
    }
   }

    return true;

}

console.log(" expect true ", testPrime(1333333));