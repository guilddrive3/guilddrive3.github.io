"use strict";
/* eslint-disable */

/* write a function, averagePoints, to get an array containing the average points across for each player */
const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];

console.log("expect [1.33, 1, 1] :", averagePoints(players));

function averagePoints(playerArr){
    const averages = [];
    for (const player of playerArr){
        const sum = player.points.reduce((tot, num) => tot + num, 0);
        const playerAverage = sum/player.points.length;
        averages.push(playerAverage);
    }
    return averages;
}
