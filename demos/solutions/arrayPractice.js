"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests
/* solution courtesy of Azamit */

function doubleNums(arr){

return arr.map(num => num * 2);
}

function doubleAges(arr){
   
    return arr.map(item => ({name : item.name,
        age : item.age *2}))
            
}

function filterEven(arr){
    return arr.filter(item => item%2===0);

}

function filterOver10(arr) {
    return arr.filter(item => item.age >10);


}

function findEvenNum(arr){
    return arr.find(number => number%2==0);

}

function findEvenAge(arr){
    return arr.find(people => people.age%2===0);

}

function includesEvenNum(arr){
    let num = arr.find(item => item%2===0);
    return arr.includes(num);

}

function includesEvenAge(arr){
    let people = arr.find(item => item.age%2===0);
    if(people.age!== undefined){
        return true;
    }else {
        return false;
    }
}