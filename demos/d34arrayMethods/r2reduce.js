"use strict";

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce(function (sum, current) { return sum + current; }, 0);
let result2 = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15
console.log(result2); // 15

/* product */
let product = arr.reduce((prod, current) => prod * current, 1);
console.log("product should be 120: ", product); // 120

/* max */
let max = arr.reduce((max, current) => Math.max(max, current), 0);
console.log("max should be 5: ", max); // 120