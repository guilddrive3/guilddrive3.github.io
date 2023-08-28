/* eslint-disable require-jsdoc */
/*Write a function, myCallback( func, arg). myCallback will call func with the given arg and then log the return value to the console.
Test myCallback by calling it with a function that takes a number and returns the cube of the argument.  First write it as "cube" a normal named function declaration, then as an anonymous function expression.
Also test with a function that returns true if the arg is an even number
*/

function myCallback(func, arg){

    //const ret = func(arg);
    console.log(func(arg));

}

function cube(num){ return num * num * num;}
function isEven(num) { return num % 2 === 0;}

myCallback(cube, 10); // 1000

myCallback(isEven, 10); // true 
