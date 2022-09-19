"use strict";


/* use filter, find, and findIndex to find
 all the even numbers
 the first even number
 the index of the first even number
*/

/**
 * 
 * @param {*} num is any integer
 * @returns {boolean} true if even else false
 */
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const numbers = [1, 5, 18, 2, 77, 108];
const evens = numbers.filter(isEven);
console.log("expect [18,2,108: " , evens);

console.log("expect 18: ", numbers.find(isEven));
console.log("expect 2: ", numbers.findIndex(isEven));


