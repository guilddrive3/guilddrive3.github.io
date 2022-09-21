"use strict";

const x = {a:1, b:2, add(){return this.a + this.b}}
console.log( x.add());  //3

const y = {a:1, b:2, add : () => {return this.a + this.b}} //arrow does not have own
console.log( y.add());  //NaN

/**
 * @returns {Object} constructor fn
 */
function Zed(){
 this.a = 1;
 this.b = 2;
 this.add = () => {return this.a + this.b};

}
const z = new Zed();
console.log("Zed: ", z.add());  //3
