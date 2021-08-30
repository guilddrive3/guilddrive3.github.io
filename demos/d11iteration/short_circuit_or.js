"use strict";

let x=false;
let y = x || 5;
console.log(y);

x=true;
let z = x || 10;
console.log(z);