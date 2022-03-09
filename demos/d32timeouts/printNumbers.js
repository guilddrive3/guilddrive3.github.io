"use strict";
/* eslint-disable */


function printNumbers(from, to) {
    //let current = from;
  
    setTimeout(function go() {
      console.log(from);
      if (from < to) {
        setTimeout(go, 1000);
      }
      from++;
    }, 1000);
  }
  
  // usage:
  printNumbers(5, 10);