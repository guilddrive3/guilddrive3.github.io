"use strict";

/* Write a function that accepts a two-dimensional array of numbers and returns the sum of all the elements in the array.
*/
let matrix = [ [1,2,3], [4,5,6], [7,8,9]];

console.log(matrix);

/**
 * 
 * @param {Array} matrix is 2-d array
 * @returns {number} total of all elements
 */
function sumElements(matrix){
let sum = 0;
for (let i=0; i < matrix.length; i++){
    for (let j=0; j < matrix[i].length; j++) {
        sum = sum + matrix[i][j];
    }
}
  return sum ;
}
    
console.log("expect 45: ", sumElements(matrix));
    