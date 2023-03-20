/*eslint-disable */

function area() { return this.side * this.side }
const square1 =  //OBJECT LITERAL
{

};


function Square(side) { //CONSTRUCTOR FUNCTION

 }




class Square2 { //CLASS SYNTAX

 }


console.log("expect 25: ", square1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);

const constSquare1 = new Square(7);
console.log("expect 49: ", constSquare1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);
console.log("is it undefined? :", Square.prototype.constructor)

const classSquare = new Square2(10);
console.log("expect 100: ", classSquare.area());
console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);

let forinArr = [];
for (let property in classSquare){
    forinArr.push(property);
} 
console.log("for in returns: ", forinArr);



/* Create two morphableSquare objects and draw the object diagram for all the objects involved
square objects
constructor function
prototype objects
links
*/
class MorphableSquare extends Square2{
    constructor(side, color, className){
        super(side);
        this.color = color;
        this.className = className;
    }
    morph(){ this.className = this.color;}
}


// }
const morph2blue = new MorphableSquare(3, "blue", "white");
const morph2green = new MorphableSquare(3, "green", "white");
console.log("expect 9: ", morph2blue.area());
console.log("expect 3: ", Object.getOwnPropertyNames(morph2blue).length);

