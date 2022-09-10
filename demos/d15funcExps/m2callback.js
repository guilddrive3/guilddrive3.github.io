"use strict";

/*  Write a function, myCallback( func, arg). myCallback will call func with the given arg and then log the return value to the console.
Test myCallback by calling it with a function that takes a number and returns the cube of the argument.  First write it as "cube" a normal named function declaration, then as an anonymous function expression.
Also test with a function that returns true if the arg is an even number
myCallback(cube, 10)   1000

myCallback(isEven, 10)  true 
*/

/**
 * 
 * @param {Object} func is ANY function
 * @param {*} arg will be passed to the function
 * @returns {*} whatever the func returns
 */
function myCallback(func, arg){
    return func(arg);
}



console.log("expect 1000: ", myCallback(function(num){return num * num * num;}, 10));

console.log("expect true: ", myCallback(isEven, 10));

/**
 * 
 * @param {*} num is an int
 * @returns {Boolean} t or f
 */
function isEven(num){
    return (num % 2 === 0);
}