"use strict";

const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
    "Barney", age: 80}, {name: "William", age: 6}, {name: "William", age: 6}];
    
    const avAgeEn = peopleArray.filter(num => num.age % 2 ===0).reduce((a,b, c) => (a.age + b.age)/( c+1));

    console.log(avAgeEn);

    const avAgeEn2 = peopleArray.filter(num => num.age % 2 ===0).reduce((total, current) => total + current.age, 0);

    console.log(avAgeEn2);
    
    //use a chain of map filter reduce to find the average age of people with even number ages

    const arr = [10, 20, 30, 40, 50] // Arr values ex.

// const calcAverage = (arr) => {
//     return arr.reduce((first, next) => first + next) / arr.length
// }

// Or even cleaner w/o return/brackets
const calcAverage = (arr) => arr.reduce((first, next) => first + next) / arr.length

const avg = calcAverage(arr)
console.log(avg);