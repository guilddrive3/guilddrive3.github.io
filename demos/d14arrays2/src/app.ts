/* Write code to create an array named scores and fill it with 5 test scores 10, 20, 30, 40 and 50.
Now write a function named findAverage, that takes an array as an argument and return average of the array values.
Call findAverage function passing array you created in step1 and save the return result in a variable, average.
Print the average, it should be 30 for this example. 
Create a second array with values from 1 to 9 and find the average of the array values.
Should compute correct average for an array of any size.
*/

// const scores = [10,20,30,40,50];
// console.log("scores are: ", scores);

// function findAverage(scoresArray: number[]): number {
//     let total = 0;
//     //get the sum of all scores and divide by number of scores
//     for (let i = 0; i < scoresArray.length; i++){
//         total = total + scoresArray[i];
//     }
//     return total/scoresArray.length;
// }

// console.log("average should be 30: ", findAverage(scores));

// const array19 = [1,2,3,4,5,6,7,8,9];
// console.log("average should be 5: ", findAverage(array19));

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function sumMatrix(arr: number[][]) {
    //implement this
    let total = 0;


    for (const row of arr) {
        for (const num of row) {
            total += num;
        }
    }
    return total;
}

console.log("expect 45: ", sumMatrix(matrix));
