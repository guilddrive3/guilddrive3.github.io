/* comment out the import assert line when running in the browser */
//import assert from "node:assert/strict"; 

import { quiz } from "./grades.js";


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


