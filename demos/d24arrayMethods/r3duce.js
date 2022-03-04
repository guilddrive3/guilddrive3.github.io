"use strict";

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce(function (product, current) { return product * current; }, 1);
let result2 = arr.reduce((max, current) => Math.max(max, current), -10000);
console.log(result); // 15
console.log(result2); // 15
