"use strict";

const { createPublicKey } = require("crypto");

/*  Write a function, myCallback( func, arg). myCallback will call func with the given arg and then log the return value to the console.
Test myCallback by calling it with a function that takes a number and returns the cube of the argument.  First write it as a normal named function declaration, then as an anonymous function expression.
*/
/**
 * 
 * @param {function} func is any function
 * @param {*} arg is any value 
 * @returns {undefined} no return, side effect of logging to console
 */
function myCallback(func, arg){
 const funcReturnVal = func(arg);
 console.log(funcReturnVal);
}

/**
 * 
 * @param {*} num is any num
 * @returns {number} is cube
 */
function cube(num){
    return num * num * num;
}

myCallback(cube, 10);