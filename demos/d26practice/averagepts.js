"use strict";

/* 1.	write a function, averagePoints, to get an array containing the average 
points across for each player .  Try with a regular for..of loop and then using map.
*/

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];
console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));

/**
 * 
 * @param {Array} playerArr array of player objects
 * @returns {Array} of players with averages
 */
function averagePoints1(playerArr){
    const playerAverages = [];
    for (const player of playerArr){
        playerAverages.push(calcAverage(player.points));
    }
    return playerAverages;
}
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} average of arr
 */
function calcAverage(arr){
    let total = 0;
    for (const num of arr){
        total += num;
    }
    return total/arr.length;
}

/**
 * 
 * @param {Array} playerArr array of player objects
 * @returns {Array} of players with averages
 */
function averagePoints(playerArr){
    return playerArr.map(player => calcAverage(player.points));
}

