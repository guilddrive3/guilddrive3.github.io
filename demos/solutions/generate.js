/* Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
console.log("expect [ [1, 2, 3], [4, 5, 6], [7, 8, 9]] : ", generateArray(3,3));
console.log("expect [ [1, 2, 3], [4, 5, 6]]: ", generateArray(2,3));
console.log("expect [ [1], [2]]: ", generateArray(2, 1));
*/

/**
 * 
 * @param {number} rows is number of rows (or top level elements)
 * @param {*} cols is number of columns (or elements within each row)
 * @returns {Array} 2-d array with specified number of rows and cols and indices for entries
 * Shown indices will be computed if outer loop index is from 0 to rows -1,
 * and inner loop goes from 1 to cols, and add i*cols + j to get each entry
 */
function generateArray(rows, cols){
    const outerArray = [];
    for (let i = 0; i < rows; i = i + 1){
        const innerArray = [];
        for (let j = 1; j <= cols; j=j+1){
            innerArray.push(i*cols + j);
        }
        outerArray.push(innerArray);
    }

    return outerArray;
}

console.log("expect [ [1, 2, 3], [4, 5, 6], [7, 8, 9]] : ", generateArray(3,3));
console.log("expect [ [1, 2, 3], [4, 5, 6]]: ", generateArray(2,3));
console.log("expect [ [1], [2]]: ", generateArray(2, 1));