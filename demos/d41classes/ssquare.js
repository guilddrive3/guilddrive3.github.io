"use strict";

/**
 * 
 * @returns {number} area of square
 */
function area() { return this.side * this.side }
const square1 =  {side: 5};
const protoSquare = {area: area};
square1.__proto__ = protoSquare; //{area: area};
const square2 =  {side: 5};
square2.__proto__ = protoSquare; //{area: area};

/**
 * 
 * @param {number} side of square
 * @returns {Object} square (constructor function)
 */
function Square(side){
    this.side = side;
}//IMPLEMENTATION NEEDED
Square.prototype = protoSquare;

/**
 * 
 */
class Square2 {
    /**
     * @param {number} side of square
     */
    constructor(side){
        this.side = side;
    }
    /**
     * @returns {number} area of square
     */
    area() { return this.side * this.side;}
}

console.log("expect 25: ", square1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);

const constSquare1 = new Square(7);
const constSquare2 = new Square(7);
console.log("expect 49: ", constSquare1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);

const classSquare = new Square2(10);
const classSquare2 = new Square2(10);
console.log("expect 100: ", classSquare.area());
console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);
