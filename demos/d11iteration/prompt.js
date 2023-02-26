"use strict";
/* eslint-disable */
import PromptSync from "prompt-sync";

//const prompt = require("prompt-sync")();
const prompt = PromptSync();
let name = prompt("What is your name?: ");
console.log(`Hi ${name}`);
