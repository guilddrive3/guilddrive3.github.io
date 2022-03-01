"use strict";

/*  Create 3 objects, student1, student2, student3
 property studentId :  s101, s102, s103 respectively
property quizAnswers:  [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
push the students into an array, quiz
 write a function, gradeQuiz, that takes the quiz array and an array of correct answers, 
 e.g., [3,1,2,4] and returns an array that has scores for each student.  Their score is the number of correct answers. 
 expect   [ 3, 2, 3 ]
 use a helper function to compute the score for a given student
*/
const student1 = {
    studentId: "s101",
    quizAnswers: [1, 1, 2, 4]
};
const student2 = {
    studentId: "s102",
    quizAnswers: [2, 1, 2, 2]
};
const student3 = {
    studentId: "s103",
    quizAnswers: [3, 1, 3, 4]
};

const quiz = [student1, student2, student3];

/**
 * 
 * @param {Array} quizArr array of student answer arrays
 * @param {Array} correctAnswers array of the correct answers
 * @returns {Array} array of scores for the students
 * need 2 loops to handle the array of arrays
 */
function gradeQuiz(quizArr, correctAnswers) {
    const grades = [];

    for (const student of quizArr) {
        const studentScore = computeScore(student.quizAnswers, correctAnswers);
        grades.push(studentScore);
    }
    return grades;
}

/**
 * 
 * @param {Array} studentAns array of a student answers
 * @param {Array} correctAns array of correct answers
 * @returns {number} number of correct answers
 */
function computeScore(studentAns, correctAns) {

    let score = 0;
    for (let i = 0; i < correctAns.length; i++) {
        if (studentAns[i] === correctAns[i]) {
            score = score + 1;
        }
    }
    return score;
}

console.log("expect 3 ", computeScore([1, 2, 3, 1], [1, 2, 3, 4]));

console.log("expect [3, 2, 3] ", gradeQuiz(quiz, [3, 1, 2, 4]));