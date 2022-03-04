"use strict";

const arr = [1, 2, 3, 2];

console.log(arr.reduce(
    (max, current) => {
        if (current > max) {
            return current;
        }
        else { return max; }
    }, -Infinity));