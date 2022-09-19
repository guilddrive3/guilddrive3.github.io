"use strict";

const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al",  center:  "Big Sleep" }

// 1. destructure the team object onto variables with the same names as the properties
const {center, power} = team;

console.log("expect Big Sleep", center);
console.log("expect Jim", power);

 

// 2. destructure the team onto variables:  one (point guard), two (shooting guard), three (small forward), four (power forward) and five (center)

const {point: one, power: four} = team; 
console.log("expect Jim: ", four);
console.log("expect Bob: ", one);
