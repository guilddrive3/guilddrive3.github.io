"use strict";
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page. 
*/
const assert = require("assert");  //always need this with node
const myExports = require("./playerPoints.js");  //with node need the name of your file with your functions here
const findTotalScores = myExports.findTotalScores;  //do this for all of the functions used in the Mocha tests
const findTotalPlayerPoints = myExports.findTotalPlayerPoints; 



describe("Season statistics tests", function () {
    //The following objects record the season statistics for players on a basketball team.
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
const teamStats = [player1, player2, player3];

    it("tests findTotalPlayerPoints", function () {
          assert.strictEqual(findTotalPlayerPoints(player3), 16);
    });

    it("tests findTotalScores", function () {
        const expecteTotalPoints = [{jersey: 8, total: 13}, {jersey: 12, total: 30}, {jersey: 6, total: 16}];
        assert.deepEqual(findTotalScores(teamStats), expecteTotalPoints);
  });

});