"use strict";

const arr = [1, 2, 3, 4, 5];


const dblFun = (num, index) => index + ": " + (num * 2);
const squareFun = num => num * num;

console.log("expect [2, 4, 6,8,10] ", arr.map(dblFun));
console.log("expect [2, 4, 6,8,10] ", myMap(arr, dblFun));

console.log("expect [1, 4, 9, 16, 25] ", arr.map(squareFun));
console.log("expect [1, 4, 9, 16, 25] ", myMap(arr, squareFun));

/**
 * 
 * @param {Array} arr any array
 * @param {Function} func any function
 * @returns {Array} mapped array
 */
function myMap(arr, func){
    const newArr = [];
    // for (const element of arr) {
    //     newArr.push(func(element));
    // }
    for (let i = 0; i < arr.length; i++){
        newArr.push(func(arr[i], i));
    }

    return newArr;
}