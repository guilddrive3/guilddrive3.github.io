//write any code you want to test here and run with npm run app
// import {makeArmy } from './closures.js';

// const army = makeArmy();

//  army[0](); // the shooter number 0 shows 10
//   army[5](); // and number 5 also outputs 10...

let count = 0;
function foo(inc: number): string { 
    count += inc;
    count += 1;
    let countWarn = "" + count;
    if (inc > 1) {
        countWarn = "WARNING:  Increment is greater than 1: " + count;

    }
    return countWarn; };