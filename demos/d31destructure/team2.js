const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al",  center:  "Big Sleep" }

// 1. destructure the team object onto variables with the same names as the properties
const {point, shooting, power, small, center} = team;


console.log("expect Big Sleep", center);
console.log("expect Jim", power);



// 2. destructure the team onto variables:  one (point guard), two (shooting guard), three (small forward), four (power forward) and five (center)

const {point: one, shooting: two } = team;

console.log("expect Jim: ", two);
console.log("expect Bob: ", one);


