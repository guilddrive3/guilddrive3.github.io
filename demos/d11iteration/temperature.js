import PromptSync from "prompt-sync";
const prompt = PromptSync();

// const tempInCelsius = prompt("Enter value in celsius: ")
// const tempInFahrenheit = 9/5 * Number(tempInCelsius) + 32;
// console.log(tempInFahrenheit);


/* Write a program that computes volume of a cylinder 
based on user inputs for radius and height of a cylinder, 
using formula v = πr2h
 */
const radius = prompt("radius: ");
const height = prompt("height: ");

const vol = Math.PI * radius * 2 * height;
console.log("volume is: ", vol);
