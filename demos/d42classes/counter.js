"use strict";

/*
  increment or decrement or view */

/**
 * @param {string} operation is flag for operation 
 * @returns {Function} closure
 */
function makeCounter() {
    let count = 0;
    return function (operation) {
        if (operation === "+") {
            count = 1 + count;
        } else if (operation === "-") {
            count = count - 1;
        } else if (operation === "view") {
            return count;
        }
        return;
    };
}

/* exercise for the reader:  return an object that has methods for the operations
THE REVEALING MODULE PATTERN  */

const myCounter = makeCounter();
myCounter("+");
myCounter("+");
myCounter("+");
myCounter("-");
console.log("expect 2: ", myCounter("view")); //expect to see 2