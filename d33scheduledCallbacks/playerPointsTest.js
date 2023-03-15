/* comment out the import assert line when running in the browser */
import assert from "node:assert/strict"; 

import { findTotalScores, findTotalPlayerPoints } from "./playerPoints.js";


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