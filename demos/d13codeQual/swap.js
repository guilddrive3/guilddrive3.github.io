"use strict";

/**
 * 
 * @param {*} a can be anything
 * @param {*} b can be anything
 * @returns {undefined} 
 */
function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
   //debugger;
    x = 55;
}

let x = 5;
let y = 10;
swap(y, x);
console.log("expect 10, 5", x, y);  //?? is swap working
