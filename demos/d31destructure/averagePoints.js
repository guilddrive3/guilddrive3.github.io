"use strict";
/* this file shows 3 different ways of computing average points for this array of objects containing arrays
 1) using for..of
 2) chain of map map reduce 
 3) chain of map map and the reduce as separate function declaration */
/* eslint-disable */

/* write a function, averagePoints, to get an array containing the average points across for each player */
const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];

console.log("expect [1.33, 1, 1] :", averagePoints(players));

// function averagePoints(playerArr){
//     const averages = [];
//     for (const player of playerArr){
//         const sum = player.points.reduce((tot, num) => tot + num, 0);
//         const playerAverage = sum/player.points.length;
//         averages.push(playerAverage);
//     }
//     return averages;
// }

// function averagePoints(playerArr){
//     const pointsArray = playerArr.map(player => player.points).map(pointsArr => pointsArr.reduce((partialAvg, current, index, arr) => partialAvg + current/arr.length, 0));
//     return pointsArray;

// }

function averagePoints(playerArr){
    const pointsArray = playerArr.map(player => player.points).map(reduce2average);
    return pointsArray;

}

/* use reduce to get average of array of numbers */
function reduce2average(arr){
    return arr.reduce((partialAvg, current, index, arr) => partialAvg + current/arr.length, 0);
}


