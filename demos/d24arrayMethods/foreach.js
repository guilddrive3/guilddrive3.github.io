
/* eslint-disable */

//const arr = [1,5,16,3, 108];

// [1, 5, 16, 3, 108].forEach(logEvens);

// function logEvens(num) { if (num % 2 == 0) console.log(num); }

const newArr = [];
// [1, 5, 16, 3, 108].forEach(logEvens2);
// [1, 5, 16, 3, 108].forEach(logEvens2);
const evensArr = [1, 5, 16, 3, 108].filter(function(number) {if (number%2 ===0) {return true} else {return false} });
console.log("evensArr is: ", evensArr);

// function logEvens2(num) { 
//     if (num % 2 == 0) {
//         newArr.push(num); 
//     }
//     //return newArr;
// }
// console.log("newArr is: ", newArr);

// function logEvens(arr){
//     arr.forEach(logEvens2);
// }


// [1,5,16,3, 108].forEach((num)=> (num%2===0)? console.log(num): 0);
// [1,5,16,3, 108].forEach((num)=> {if (num%2===0){console.log(num)}; });


// function isEven(num) {
//     if (num % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const numbers = [1, 5, 18, 2, 77, 108];
// /* use filter
// all the even numbers */

// const evens = numbers.filter(isEven);
// console.log("evens is: ", evens);

// console.log("evens is: ", numbers.filter(num => num % 2 === 0));
