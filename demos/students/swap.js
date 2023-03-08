/* eslint-disable require-jsdoc */
// function swap(arr){
//     let max = arr[0];
//     let min = arr[arr.length-1];

//     for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//     arr[i] = max;

//     }else if (arr[i] < min) {
//     arr[i] = min;
//     }



//     }
//     [max, min] = [min, max];
//     return arr;
//     }
//     console.log(swap([2, 5, 7, 4, 4]));

function swap(arr) {
    let max = arr[0];
    let min = arr[0];
    let maxIndx = 0;
    let minIndx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) { max = arr[i]; maxIndx = i; } else if (min > arr[i]) { min = arr[i]; minIndx = i; }
    }
    [arr[minIndx], arr[maxIndx]] = [arr[maxIndx], arr[minIndx]];
    return arr;
}
console.log(swap([2, 4]));
const testArr = [2, 1, 5, 4];
console.log("expect [2, 5,1,4] : ",    swap(testArr));
