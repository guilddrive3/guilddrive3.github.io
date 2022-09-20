"use strict";

const nums = [5, -6, 8, -20];

//sort the array according to the value of their absolute value

nums.sort((a,b) => Math.abs(a) - Math.abs(b));

console.log("expect [5, -6, 8, -20] : ", nums);