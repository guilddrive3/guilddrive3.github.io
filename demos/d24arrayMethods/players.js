"use strict";

const { getMaxSubSum } = require("../../d23dataTypes/app");

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];

console.log("expect 4: ", sumPoints(players));

/**
 * 
 * @param {arr} playersArr is arr of players
 * @returns {number} max of points for players
 */
function sumPoints(playersArr){

    let max = 0;

    for (const player of playersArr) {
        /* get sum of player points */
        let sum = 0;
        for (const points of player.points){
            sum += points;
        }
        if (sum > max) {
            max = sum;
        }
    }

    return max;
}