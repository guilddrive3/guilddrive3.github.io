/* Write code to create an array named scores and fill it with 5 test scores 
10, 20, 30, 40 and 50. */
const scores = [10, 20, 30, 40, 50];

/* Now write a function named findAverage, that takes an array as an argument and return average of the array values. */
/**
 * 
 * @param {Array} numArr is array of numbers
 * @returns {number} average 
 */
function findAverage(numArr) {
    let total = 0;
    //find sum of values and then divide by number of entries
    for (let i = 0; i < numArr.length; i = i + 1) {
        total = total + numArr[i];
    }
    const average = total / numArr.length;
    return average;
}

/* Call findAverage function passing array you created in step1 and save the return result in a variable, average. */
/* Print the average, it should be 30 for this example. */
console.log("expect 30: ", findAverage(scores));

/* Create a second array with values from 1 to 9 and find the average of the array values.
Should compute correct average for an array of any size.
*/
const arr1to9 = [1,2,3,4,5,6,7,8,9];
console.log("expect 5: ", findAverage(arr1to9));


