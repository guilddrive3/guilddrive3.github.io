"use strict";

let three = 3;
let four = 4;
let [one, two] = [three, four];
console.log(one);
console.log(two);
console.log(three);
console.log(four);

//let title, width, height;

// error in this line
let {title, width, height} = {title: "Menu", width: 200, height: 100};

console.log(title);
console.log(width);
console.log(height);

const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al",  center:  "Big Sleep" }

// 1. destructure the team object onto variables with the same names as the properties
let {center, power } = team;


console.log("expect Big Sleep", center);
console.log("expect Jim", power);



// 2. destructure the team onto variables:  one (point guard), two (shooting guard), three (small forward), four (power forward) and five (center)

let {point: one1, power: four4 } = team;
console.log("expect Jim: ", four4);
console.log("expect Bob: ", one1);

