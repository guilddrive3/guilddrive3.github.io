"use strict";

const prompt = require("prompt-sync")();

const radius = prompt("enter radius");
const height = prompt("enter height");
const vol = Math.PI * radius * radius * height;
console.log(vol);
