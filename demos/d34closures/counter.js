"use strict";
/*
Write a function, makeCounter() that declares a local variable, count, and another local variable, innerFunc,
innerFunc will increment the count variable.  

Call it twice to make different counters, counter1 and counter2.  

Do they keep independent counts?
*/

/**
 * @returns {Function} returns the incrementer innerFunc
 */
function makeCounter(){
    let count = 0;
    const  innerFunc = function(){
        count = count + 1;
        return count;
    };
    return innerFunc;
}

const counter1 = makeCounter();
const counter2 = makeCounter();

counter1();
counter2();
console.log(counter1());
console.log(counter2());
console.log(counter2());
console.log(counter2());
