"use strict";

const prompt = require("prompt-sync")();
const day = prompt("What day is today enter(1-7)?");

const message = day > 5 ? "Happy weekend!" : "Happy weekdays!";
console.log(message);