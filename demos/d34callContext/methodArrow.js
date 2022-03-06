"use strict";

const x = {a:1, b:2, add(){return this.a + this.b}}
console.log( x.add());  //3

const y = {a:1, b:2, add : () => {return this.a + this.b}}
console.log( y.add());  //NaN
