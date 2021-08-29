"use strict";

let prompt = require('prompt-sync')();
let userInput = prompt("Please enter a fraction number: ");
console.log("---------------visual separator---------------");
console.log(userInput);
console.log(typeof userInput);
console.log("---------------visual separator---------------");
let num = Number(userInput);
console.log(num);
console.log(typeof num);
console.log("---------------visual separator---------------");
let intPartOnly = parseInt(userInput);
console.log(intPartOnly);
console.log(typeof intPartOnly);
console.log("---------------visual separator---------------");