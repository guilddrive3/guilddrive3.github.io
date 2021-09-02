"use strict";

/* Given an expression array exp, write a program to examine whether the pairs and the of “{“, “}” are balanced in exp.  
	- Use a for .. of loop through the expression array
	- push any right bracket onto a stack
	- on a left bracket pop the stack and check that return value is a right bracket
	- if not, then no balanced
	- if stack empty at end then balanced, else not balanced
*/
//Example:  
const exp1 = [ "{", "}", "{", "{", "}", "}" ] ; 
//Output: Balanced 
 
const exp2 = [ "{", "{", "}", "{" ];
//Output: Not Balanced

/**
 * 
 * @param {Array} exp is array of brackets --{ or }
 * @returns {boolean} true if balanced else false
 */
function checkBalance(exp){
    const stack = [];
    for (let bracket of exp){
        //if left then push
        if (bracket === "{") {
            stack.push(bracket);
        } else { //have a }
            //if right then pop and check value is left
            const popBracket = stack.pop();
            if (popBracket === "{") {
                continue;
            } else {
                return false;
            }
        } 
    }
    //done with the array, check for stack empty
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log("expect true: ", checkBalance(exp1));
console.log("expect false: ", checkBalance(exp2));
