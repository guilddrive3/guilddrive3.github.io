"use strict";

const peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 10 }, { name: "Will", age: 30 },{ name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];

/**
 * 
 * @param {*} arr is an array
 * @returns {number} average of evens
 */
function evenAges(arr){
    return arr.filter(num => num.age%2===0).map(num => num.age).reduce((sum,item,index,array) => { 
        let total= sum + item;
        return total/array.length;
        // let total= sum + item/array.length;
        // return total;
    }, 0);       
}


console.log("evenave: ", evenAges(peopleArray));