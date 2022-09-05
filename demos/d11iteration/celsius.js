"use strict";

const prompt = require("prompt-sync")();

// const tempInCelsius = prompt("Enter value in celsius: ")
// const tempInFahrenheit = 9/5 * Number(tempInCelsius) + 32;
// console.log(tempInFahrenheit);

/* Write a program that computes volume of a cylinder based on user inputs for 
radius and height of a cylinder, using formula v = πr2h  */

const radius = Number(prompt("enter radius"));
const height = +prompt("enter height");
const volume = Math.PI * (radius**2) * height;
console.log("volume is: ", volume);

