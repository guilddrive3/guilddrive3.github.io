/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai";

import { player3, teamStats, findTotalScores, findTotalPlayerPoints, findTotalPointsByJersey } from "../src/playerPoints.js";


describe("Season statistics tests", function () {


    it("tests findTotalPlayerPoints", function () {
          assert.strictEqual(findTotalPlayerPoints(player3), 16);
    });

    it("tests findTotalPointsByJersey", function () {
        assert.strictEqual(findTotalPointsByJersey(6), 16);
  });

    it("tests findTotalScores", function () {
        const jerseyPoints = [{jersey: 8, total: 13}, {jersey: 12, total: 30}, {jersey: 6, total: 16}];
        assert.deepEqual(findTotalScores(teamStats), jerseyPoints);
  });

});