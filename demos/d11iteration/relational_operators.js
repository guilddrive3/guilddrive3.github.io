"use strict";

let foo = 5;
let bar = "five";
let i = "5";

console.log(foo<7);         // true
console.log(foo<=5);        // true
console.log(foo>5);         // false
console.log(foo>=5);        // true
console.log(foo==i);        // true
console.log(foo==bar);      // false
console.log(foo===i);       // false
console.log(bar < "four");  // true
console.log(1==true);       // true
console.log(1===true);      // false