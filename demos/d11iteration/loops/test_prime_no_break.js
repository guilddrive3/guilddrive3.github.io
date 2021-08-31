"use strict";

const prompt = require("prompt-sync")();

let n = prompt("Please enter a number to test if it is prime: ");
let factorCount = 0;

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    factorCount++;
  }
}

console.log(factorCount === 0);