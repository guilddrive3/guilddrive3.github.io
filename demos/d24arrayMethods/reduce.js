"use strict";
/* eslint-disable */
/* reduce the array to the product of the numbers (“expect 120”)
reduce the array to the max of the numbers (“expect 5”)
*/


const arr = [1, 2, 3, 4, 5];
const result = arr.reduce(function (product, current) { return product * current; }, 1);

console.log("expect 120: ", result);

function checkMax(max, current) {
    if (current > max) {
        return current;
    } else {
        return max;
    }
}

const max = arr.reduce(checkMax, 0);
const max2 = arr.reduce((max, current) => current > max ? current : max, 0);
console.log("expect 5: ", max);

