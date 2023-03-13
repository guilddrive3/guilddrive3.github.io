const team = [ "Bob",  "Fred",  "Jim"];
// destructure the team array onto variables with the same names as the elements, but all lower case

const [bob, fred, jim] = team;

console.log("expect Bob", bob );
console.log("expect Jim", jim);
