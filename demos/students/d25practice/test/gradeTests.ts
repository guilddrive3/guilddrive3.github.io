/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai";

import { quiz } from "../src/grades.js";


describe("grades from quiz", function () {

    it("scoreStudent 10", function () {
        assert.strictEqual(quiz.scoreStudent(10), 1);
    });
    it("scoreStudent 11", function () {
        assert.strictEqual(quiz.scoreStudent(11), 2);
    });
    it("scoreStudent 12", function () {
        assert.strictEqual(quiz.scoreStudent(12), 2);
    });
    it("getAverage", function () {
        assert.strictEqual(+quiz.getAverage().toFixed(3), 1.667);
    });

});


