"use strict";
/* eslint-disable */
/* 
change comparator function to sort in descending order, then 
change it to sort in lexicographic descending order */

function compareNumeric(a, b) { //need to modify this function
//-1 means a comes before b -- semantics of the sort comparator function
//1 means a comes after b
a = String(a);
b = "" + b;

  if (a > b) return -1; 
  if (a == b) return 0;
  if (a < b) return 1;  
}
let arr = [ 1, 15, 2 ];
arr.sort(compareNumeric);
console.log(arr);  
