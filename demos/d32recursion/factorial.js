"use strict";

//Write both iterative and recursive solutions to calculate factorial of an integer. 
//	factorial (0) = 1
//	factorial (n) = n * factorial (n-1) [for n>0]

/**
 * 
 * @param {number} n is a positive integer
 * @returns {number} factorial of n
 */
function iterativeFact(n){
    let total = 1;
    for (let i = 1; i <= n; i++){
        total = total * i;
    }
    return total;
}

console.log("expect 24: ", iterativeFact(4));
console.log("expect 24: ", recursiveFact(4));

/**
 * 
 * @param {number} n is a positive integer
 * @returns {number} factorial of n
 */
function recursiveFact(n){
    if (n == 1) {
        return 1;
    } else {
        return n * recursiveFact(n - 1);
    }
}
