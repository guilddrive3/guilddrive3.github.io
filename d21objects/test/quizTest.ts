/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai"

import { StudentQuiz, gradeStudent, gradeQuiz, gradeQuizLabeled } from "../src/quiz.js";  //import all of the app.js functions used in the Mocha tests


describe("quiz tests", function () {

    const student1 = {
        studentId: 101,
        quizAnswers: [1, 1, 2, 4]
    }

    const student2 = {
        studentId: 102,
        quizAnswers: [2, 1, 2, 2]
    }

    const student3 = {
        studentId: 103,
        quizAnswers: [3, 1, 3, 4]
    }
    const CORRECT_ANSWERS = [3, 1, 2, 4];
    const studentQuizzes: StudentQuiz[] = [student1, student2, student3];

    it("gradeStudent -- grade for 1 student", function () {
        assert.deepEqual(gradeStudent(student1.quizAnswers, CORRECT_ANSWERS), 3);
    });

    it("gradeQuiz -- grade for all students", function () {
        assert.deepEqual(gradeQuiz(studentQuizzes, CORRECT_ANSWERS), [3, 2, 3]);
    });

    it("gradeQuizLabeled -- labeled objects grades for all students", function () {
        assert.deepEqual(gradeQuizLabeled(studentQuizzes, CORRECT_ANSWERS), [
            { id: 101, score: 3 },
            { id: 102, score: 2 },
            { id: 103, score: 3 }]);
    });


});