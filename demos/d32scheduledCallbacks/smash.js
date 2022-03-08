"use strict";
/*eslint-disable */
//Write a function, smash, that uses for--of  and destructuring in parameters of the callback function. Remember that you need () around destructuring brackets for an object if you do not have let or const.

const bar = [{x:1, y:2}, {x:10, y:4}]
console.log("expect [3, 14]:", smash(bar));

function smash(arr){
 const returnArr = [];
 for (const {x, y} of arr){
     //const {x, y} = item;
     returnArr.push(x + y);
 }
 return returnArr;
}