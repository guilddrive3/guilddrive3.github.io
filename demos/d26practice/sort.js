"use strict";
/* eslint-disable */
//9.	use sort to sort an array of numbers in descending order

const descending = [4, 2, 8, 15].sort(myComparator );
console.log("expect [15, 8, 4, 2]", descending);

function myComparator(num1, num2){
    return -(num1 - num2);  //sort is ascending order by default if return positive when num1 > num2
}



