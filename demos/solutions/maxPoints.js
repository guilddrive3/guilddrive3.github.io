function totalPoints(player){ //return the total points of a player object
    let totalPts = 0;
    for (const point of player.points){
     totalPts += point;
    }
   return totalPts;
  }
  
  function maxPoints(playerArr){
   let maxPoints = 0;
   for (const player of playerArr){
     if (totalPoints(player) > maxPoints){
      maxPoints = totalPoints(player);
    }
   } //end for
   return maxPoints;
  }

  /* write a function, maxPoints, to find and return the maximum points of any single player.   */

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];

console.log("expect 4:",  maxPoints(players));