"use strict";
/*eslint-disable */

function area() { return this.side * this.side }
const square1 =  //IMPLEMENTATION NEEDED

function Square(//IMPLEMENTATION NEEDED
){}



class Square2 {}//IMPLEMENTATION NEEDED{


console.log("expect 25: ", square1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);

const constSquare1 = new Square(7);
console.log("expect 49: ", constSquare1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);

const classSquare = new Square2(10);
console.log("expect 100: ", classSquare.area());
console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);


/* Create two morphableSquare objects and draw the object diagram for all the objects involved 
square objects
constructor function
prototype objects
links
*/
// class MorphableSquare extends Square2{


// }
// const morph2blue = new MorphableSquare(3, "blue", "white");
// const morph2green = new MorphableSquare(3, "green", "white");
// console.log("expect 9: ", morph2blue.area());
// console.log("expect 3: ", Object.getOwnPropertyNames(morph2blue).length);

