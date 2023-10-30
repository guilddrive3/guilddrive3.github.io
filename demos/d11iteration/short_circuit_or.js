"use strict";
let x = 1;
let y = 2;
let z = 3;

console.log(x && y && z); // 3

x = false;
console.log(x && y && z); // false

x = 0;
console.log(x && y && z); // 0

x = 1;
console.log(x || y || z); // 1

x = false;
y = 0;
z = null;
console.log(x || y || z); // null

console.log(x ?? y ?? z); // false

let age = (0 ?? 10)

