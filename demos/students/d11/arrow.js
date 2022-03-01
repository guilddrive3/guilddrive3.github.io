
/* eslint-disable */

myMap([1,2,3], num => num * 3);

function myMap(arr, func){

    const newArr = [];
    for (const element of arr){
        newArr.push(func(element));
    }
    return newArr;
}