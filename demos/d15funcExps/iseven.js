"use strict";

 let isEven = abc =>  abc%2===0;

const isEven2 = function(abc){
    return abc%2===0;
};

console.log("expect true: ", isEven(4));

