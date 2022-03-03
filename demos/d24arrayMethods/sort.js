"use strict";
/* eslint-disable */

function compareNumeric(a, b) {
    a = "" + a;
    b = "" + b;
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
  }
  let arr = [ 1, 15, 2 ];
  arr.sort(compareNumeric);
  console.log(arr);  
  