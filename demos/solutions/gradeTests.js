/* comment out the import assert line when running in the browser */
import assert from "node:assert/strict"; 

import { quiz } from "./grades.js";


describe("grades from quiz", function () {

    it("test answer comparator", function () {
        assert.deepEqual([{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }].sort(quiz.answerComparator),
        [{ qid: 1, ans: "b" }, { qid: 2, ans: "b" }, { qid: 3, ans: "a" }] );
    });
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
        assert.strictEqual(Number(quiz.getAverage().toFixed(3)), 1.667);
    });

});


