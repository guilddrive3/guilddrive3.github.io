"use strict";

const prompt = require("prompt-sync")();
/* 
If age <= 0 
print "please enter valid age"
if age is between 0 and 14
print "You can't drive yet."
if age is between 15 and 18
print "You can drive under supervision."
if age is 19 or higher
print "You can drive."
*/

let age = prompt("enter age:  ");

if (age <= 0) {
    console.log("Please enter valid age.");
} else if (age > 0 && age <= 14) {
    console.log("You can't drive yet.");
} else if (age >= 15 && age <= 18) {
    console.log("You can drive with an adult supervisor.");
} else {
    console.log("you can drive!!");
}
