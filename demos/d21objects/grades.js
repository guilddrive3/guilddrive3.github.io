"use strict";

/*  Create 3 objects, student1, student2, student3
 property studentId :  s101, s102, s103 respectively
property quiz answers:  [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
push the students into an array, quiz
 write a function, gradeQuiz, that takes the quiz array and an array of correct 
 answers, e.g., [3,1,2,4] and returns an object that has properties with the names of each studentId and the value of the property will be their score on the quiz (one point for each correct answer)
 expect   { s101: 3, s102: 2, s103: 3 }
*/

const student1 = {
    studentId: "s101",
    quizAnswers: [1, 1, 2, 4],
};
const student2 = {
    studentId: "s102",
    quizAnswers: [2, 1, 2, 2],
};
const student3 = {
    studentId: "s103",
    quizAnswers: [3, 1, 3, 4],
};

const quiz = [student1, student2, student3];
const answers = [3, 1, 2, 4];

/**
 * 
 * @param {Array} quizArray has student objects 
 * @param {*} answers has the correct answers
 * @returns {Object} contains quiz scores for each studentid
 */
function gradeQuiz(quizArray, answers) {
    //const grades = {}; //need the object to return
    const grades = [];
    // loop through the array of students and grade their answers
    for (const student of quizArray) {
        const studentScore = scoreStudent(student, answers);
        grades[student.studentId] = studentScore;
        //const stuId = student.studentId;
        //grades.push({stuId, studentScore});
    }
    return grades;
}

/**
 * 
 * @param {Object} student is student object 
 * @param {*} answers are quiz answers
 * @returns {number} score for the quiz
 */
function scoreStudent(student, answers) {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (student.quizAnswers[i] === answers[i]) {
            score = score + 1;
        }
    }
    return score;
}

console.log("quiz results are: ", gradeQuiz(quiz, answers));