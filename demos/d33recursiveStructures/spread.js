"use strict";
/* eslint-disable */

function foo(a, b, ...c){
    console.log(a,b,c);
}

const arr = [1,2,3,4,5,6];

foo(...arr);