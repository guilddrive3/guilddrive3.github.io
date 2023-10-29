"use strict";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let userInput = prompt("Please enter a fraction number: ");
console.log("---------------visual separator---------------");
console.log(userInput);
console.log(userInput + 15 === 25, "should be true if enter 10?");
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