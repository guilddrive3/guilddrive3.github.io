"use strict";
/* eslint-disable */

const bar = [{x:1, y:2}, {x:10, y:4}]
console.log("expect [3, 14]:", smash(bar));

let {x, y} = bar[0];
console.log(x);

function smash(arr){
 return arr.map(({x, y}) =>  x + y );
 }
