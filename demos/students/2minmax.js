const testArr = [2,1,5,4];

console.log("expect [2, 5,1,4] : ", swap(testArr));

console.log("expect [2,5,1,4]", testArr);

/**
* @param {The function takes an array as an input}
* @process {The function computes for max and min values, }
* Initialize the max with the arr[0]
* Initialize the min with the last element = arr[arr.legnth-1]
* if max < arr[i], max = arr[i]
* if min > arr[i], min = arr[i]
* [min, max] = [max, min]
* @returns {returns the swapped array arr}
*
* Input: array
* if(arr[i] > )
*/
function swap(arr){
    let max = arr[0];
    let min = arr[arr.length-1];
    
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
    arr[i] = max;
    
    }else if (arr[i] < min) {
    arr[i] = min;
    }
    
    
    
    }
    [max, min] = [min, max];
    return arr;
    }