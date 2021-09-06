"use strict";

/*
 write a function, collectAnswers(questionNum) that will go through the 
 array of student quiz answers, “quiz”, and will collect the answers for 
 all of the students for the nth question.  For example, collectAnswers(3) 
 will return an array with the answers of all students to 
 question 3:  [2, 2, 3] in the above example
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

/**
 * @param {Array} quizArray is array of student objects with their quiz answers
 * @param {number} questionNumber is an integer
 * @returns {Array} collection of all answers for that question in the quiz
 */
function collectAnswers(quizArray, questionNumber){
    /* loop through the students in quizArray and get their answers for the indicated question
    */
   const answers = [];
   const index = questionNumber - 1; //0 based index
    for (const student of quizArray){
        answers.push(student.quizAnswers[index]);
    }
    return answers;

}
console.log("expect [2, 2, 3 ] ::" , collectAnswers(quiz, 3));