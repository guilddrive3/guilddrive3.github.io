"use strict";

/* Given an expression array exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp. 

Example:  
 Input: exp = ["{", "}", "{", "{", "}", "}"]  
Output: Balanced 
 
Input: exp = ["{", "{", "}", "{“]  
Output: Not Balanced 

*/

/**
 * 
 * @param {Array} exp is an array of brackets
 * @returns {boolean} true if balanced else false
 * process: push every left bracket onto a stack.  for every right bracket pop the stack 
 * and check that the popped value is a matching bracket
 */
function checkBalance(exp){
 
}
console.log("expect true: ", checkBalance( ["{", "}", "{", "{", "}", "}"]   ));
console.log("expect false: ", checkBalance( ["{", "{", "}", "{" ] ));