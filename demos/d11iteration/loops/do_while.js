const prompt = require("prompt-sync")();

let user_input;
do {
  user_input = prompt("Please enter a command: ");
  console.log("You command was: " + user_input);
} while (user_input !== 'stop');
console.log("exiting...");