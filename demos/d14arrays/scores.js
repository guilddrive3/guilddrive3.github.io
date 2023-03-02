

/* Write code to create an array named scores and fill it with 5 test scores 10, 20, 30, 40 and 50.
Now write a function named findAverage, that takes an array as an argument and return average of the array values.
Call findAverage function passing array you created in step1 and save the return result in a variable, average.
Print the average, it should be 30 for this example. 
Create a second array with values from 1 to 9 and find the average of the array values.
Should compute correct average for an array of any size */

const scores = [10, 20, 30, 40, 50];

/**
 * 
 * @param {Array} arr is an array of numbers
 * @returns {Number} average of array values
 */
function findAverage(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total = total + arr[i];
    }

    return total/arr.length;
}

console.log("expect 30: ", findAverage(scores));

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("expect 5: ", findAverage(digits));  