/*  Write a function, 
myCallback( func: (num: number)=>number , arg: number): void. myCallback will call func with the given 
arg and then log the return value to the console.
Test myCallback by calling it with a function that takes a number and returns the cube of the argument.  
First write it as "cube" a normal named function declaration, then as an anonymous function expression.
Also test with a function that returns the cube if the arg is an even number, else the square.

myCallback(cube, 10)   1000

myCallback(cubeSquare, 10)  1000
myCallback(cubeSquare, 9)  81 
*/

function cube(num: number): number {
    return num * num * num;
}

function myCallback( func: (num: number)=>number , arg: number): void {
 console.log(func(arg));

}

console.log("expect 1000: ", myCallback(cube, 10));