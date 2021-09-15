"use strict";

/* const numbers = [1, 5, 18, 2, 77, 108];
 use filter, find, and findIndex to find
 all the even numbers
 the first even number
 the index of the first even number
*/
const numbers = [1, 5, 18, 2, 77, 108];
console.log("expect [18, 2, 108]: " + numbers.filter(num => num % 2 === 0));
console.log("expect 18: " + numbers.find(num => num % 2 === 0));
console.log("expect 2: " + numbers.findIndex(num => num % 2 === 0));
