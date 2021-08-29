"use strict";

const prompt = require("prompt-sync")();

let grade = prompt("Please enter your grade: ");

let gpa;

switch (grade) {
  case 'A':
    gpa = 4.0;
    break;
  case 'B':
    gpa = 3.6;
    break;
  case 'C':
    gpa = 3.2
    break;
  default:
    gpa = 0.0;
}

console.log('your gpa is ' + gpa);