"use strict";

let prompt = require('prompt-sync')();

let grade = prompt("Please enter your grade: ");

let gpa;

if (grade === 'A') {
  gpa = 4.0;
} else if (grade === 'B') {
  gpa = 3.0;
} else if (grade === 'C') {
  gpa = 2.0;
} else {
  gpa = 0.0;
} 

console.log('your gpa is ' + gpa);