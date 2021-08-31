"use strict";

const prompt = require("prompt-sync")();

let n = prompt("Please enter a number to test if it is pime: ");
let isPrime = true;

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    isPrime = false;
    break;
  }
}


console.log(isPrime);