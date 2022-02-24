"use strict";

/* Write code to create an array named scores and fill it with 5 test scores 10, 20, 30, 40 and 50.
Now write a function named findAverage, that takes an array as an argument and return average of the array values.
Call findAverage function passing array you created in step1 and save the return result in a variable, average.
Print the average, it should be 30 for this example. 
Create a second array filled with 10 random values between 0 to 10 and find the average of the array values.
Should compute correct average for an array of any size.
*/

const scores = [10, 20, 30, 40, 50];

/**
 * 
 * @param {Array} arr is any array of numbers
 * @returns {number} is average of array vals
 */
function findAverage(arr){
    let total = 0;
    for (let i=0; i < arr.length; i++){
        total = total + arr[i];
    }
    const average = total/arr.length;

    return average;
}
console.log("expect 30: ", findAverage(scores));

const random = [];
for (let i=0; i<10; i++){
	random[i] = Math.floor(Math.random()*10);
}
console.log(random);
console.log(findAverage(random));
