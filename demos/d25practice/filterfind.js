"use strict";

const numbers = [1,5,18,2,77,108];
console.log("even numbers: ", numbers.filter(num => num % 2 === 0));

console.log("first even number: ", numbers.find(num => num % 2 === 0));

console.log("index of first even number: ", numbers.indexOf(num => num % 2 === 0));