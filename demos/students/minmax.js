/* eslint-disable require-jsdoc */


const testArr = [2,1,5,4];

console.log("expect [2, 5,1,4] : ", swapMinMax(testArr));

console.log("expect [2,5,1,4]", testArr);



function swapMinMax(arr) {



    // declaring variables that holds min and max number as well as min and max elements of the first elements
    
    let minIndex = 0;
    
    let maxIndex = 0;
    
    let minVal = arr[0];
    
    let maxVal = arr[0];
    
    //loop through each elements
    
    for(let i = 0; i<arr.length; i++){
    
    /*compare the current smallest and largest in the array.
    
    If it's smaller than the current smallest element, update the smallest index and value.
    
    If it's larger than the current largest element, update the largest index and value.*/
    
    for (let i = 1; i < arr.length; i++) {
    
    if (arr[i] < minVal) {
    
    minIndex = i;
    
    minVal = arr[i];
    
    } else if (arr[i] > maxVal) {
    
    maxIndex = i;
    
    maxVal = arr[i];
    
    }
    
    }
    
    //the smallest index is not equal to the largest index, swap the values at those indice
    
    if (minIndex !== maxIndex) {
    
    [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
    
    }
    
    //this reurn the modified one
    
    return arr;
    
    }
    
    }