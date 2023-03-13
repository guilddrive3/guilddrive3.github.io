/* eslint-disable require-jsdoc */
/*
change comparator function to sort in descending order, then 
change it to sort in lexicographic descending order
*/

function lexDescending(a, b) { //need to modify this function
    a = "" + a;
    b = "" + b;
  if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}
let arr = [ 1, 15, 2 ];
arr.sort(lexDescending);
console.log("expect [2, 15, 1]: ", arr);  


