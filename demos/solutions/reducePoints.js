"use strict";

const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];

console.log("expect 4:", maxPoints(players));

/**
 * 
 * @param {array} playersArr is above
 * @returns {number} max of sum of individual player points
 * exercise to use reduce
 * somewhat tricky because need two loops
 * strategy will be to use reduce on each array
 */
function maxPoints(playersArr) {
    const max = playersArr.reduce((max, playerArr) => {
        const sumPoints = sumArr(playerArr.points);
        return sumPoints > max ? sumPoints : max;
    }, 0);

    return max;
}

function sumArr(arr) {
    const sum = arr.reduce((tot, current) => tot + current, 0);
    return sum;
}
console.log("expect 10: ", sumArr([1, 2, 3, 4]));