// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null};
  
//   let json = JSON.stringify(student);
  
// console.log(json);

// const team = [ "Bob",  "Fred",  "Jim"]
// // destructure the team array onto variables with the same names as the elements, but all lower case
// const [bob, fred, jim] = team;
// fred;
// console.log("expect Bob", bob );
// console.log("expect Jim", jim);

// const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al",  center:  "Big Sleep" };

// // 1. destructure the team object onto variables with the same names as the properties
// const { point, shooting, power, small, center } = team;
// point; shooting; small;
// console.log("expect Big Sleep", center);
// console.log("expect Jim", power);



// // 2. destructure the team onto variables:  one (point guard), two (shooting guard), three (small forward), four (power forward) and five (center)

// const { point: one1, shooting: two, small: three, power: four, center: five } = team;
// console.log("expect Jim: ", four);
// console.log("expect Bob: ", one1);
// two; three; four; five;


// Write a function, makeCounter() that declares a local variable, count, and another local variable, innerFunc, 
//which is an inner function;  innerFunc will increment the count variable and return the incremented value.  
//makeCounter should return innerFunc.

// Call it twice to make different counters, counter1 and counter2.  

// Do they keep independent counts?

function makeCounter(): () => number {
    let count = 0;
    function innerFunc(): number {
        count++;
        return count;
    }
    return innerFunc;
}

const counter1 = makeCounter();
const counter2 = counter1;  //makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());


