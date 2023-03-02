/* - Use a for .. of loop with the expression array
    - push any left bracket onto a new array, expressionStack
    - on a right bracket pop the expressionStack and check that return value is a left bracket 
        -- using the array as a stack
    - if not, then not balanced
    - if stack empty at end then balanced, else not balanced

Example:  
 Input: exp = [ "{", "}", "{", "{", "}", "}" ]  
Output: Balanced 
 
Input: exp = [ "{", "{", "}", "{" ] 
Output: Not Balanced 
*/
/**
 * 
 * @param {Array} expArray is array of brackets, must be either { or }
 * @returns {String}  balanced or not balanced
 */
function isBalanced(expArray) {
    const expStack = [];
    /* - Use a for .. of loop with the expression array */
    for (const bracket of expArray) {
        /* 	- push any left bracket onto a new array, expressionStack */
        if (bracket === "{") {
            expStack.push(bracket);
        } else {    /*	- on a right bracket pop the expressionStack and check that return value is a left bracket
         if not, then not balanced */
            const popBracket = expStack.pop();
            if (popBracket !== "{") {
                return "not balanced";
            }
        }
    } //end of loop
    /* if stack empty at end then balanced, else not balanced */
    if (expStack.length === 0) {
        return "balanced";
    } else {
       return "not balanced";
    }
}

console.log("expect balanced: ", isBalanced([ "{", "}", "{", "{", "}", "}" ] ));
console.log("expect not balanced: ", isBalanced([ "{", "{", "}", "{" ]));
 