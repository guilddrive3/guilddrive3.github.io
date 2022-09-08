"use strict";
/* Given an expression array exp, write a program to examine whether the pairs and the of “{“, “}” are balanced in exp.  
	- Use a for .. of loop through the expression array
	- push any left bracket onto a stack
	- on a right bracket pop the stack and check that return value is a left bracket
	- if not, then not balanced
	- if stack empty at end then balanced, else not balanced

Example:  
 Input: exp = [ "{", "}", "{", "{", "}", "}“ ]  
Output: Balanced 
 
Input: exp = [ "{", "{", "}", "{" ] 
Output: Not Balanced 
*/
const exp1 = [ "{", "}", "{", "{", "}", "}" ] ; 
const exp2 = [ "{", "{", "}", "{" ] ;

/**
 * 
 * @param {Array} arr is array of brackets
 * @returns {Boolean} true if balanced
 */
function balanced(arr){
    const bracketStack = [];
    /* - Use a for .. of loop through the expression array */
    for (const element of arr){
        /* - push any left bracket onto a stack */
        if (element === "{"){
            bracketStack.push(element);
        }

        /* - on a right bracket pop the stack and check that return value is a left bracket */
        if (element === "}"){
            const stackElement = bracketStack.pop();
            if (stackElement !== "{"){  //- if not, then not balanced
                return false;
            }
        } 
    }
    /* - if stack empty at end then balanced, else not balanced */
    if (bracketStack.length === 0) {
        return true
    } else {
        return false;
    }
}

console.log("expect true: ", balanced(exp1));
console.log("expect false: ", balanced(exp2));