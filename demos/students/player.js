
/**
 * 
 * @param {Array} players is array of player objects
 * @returns {number} total of all points scored across all players
 * player object looks like {name: "Bob", points: [1, 2, 1]};
 */
function sumPoints(players) {
    let total = 0;
    //let player = players.find(player => player.name === name);
    // loop through the players
    for (const player of players) {
        for (const point of player.points) {
            total += point;
        }
    }
    return total;
}
/* write a function, sumPoints, to get the total points across all players */

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];

console.log("expect 10: ", sumPoints(players));

 

