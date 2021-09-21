"use strict";
/*eslint-disable */

function area() { return this.side * this.side }
const square1 =  {side: 5};
square1.__proto__ = {area: area};

function Square(side){
    this.side = side;
}

function foo(){console.log("hi")};
foo();
Square.prototype.area = area;

class Square2 {
    constructor(side){
        this.side = side;
    }
    area() { return this.side * this.side }
}

console.log("expect 25: ", square1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);

const constSquare1 = new Square(7);
console.log("expect 49: ", constSquare1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);

const classSquare = new Square2(10);
console.log("expect 100: ", classSquare.area());
console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);
