"use strict";

/*  Create 3a quiz object
 property s101, s102, s103
property values:  [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
push the students into an array, quiz
 write a function, collectAnswers(quiz, correctAnswers) that will go through the array of student quiz answers, “quiz”, and will collect the answers for all of the students for the nth question.  For example, collectAnswers(3) will return an array with the answers of all students to question 3:  [2, 2, 3] in the above example

 */

 const quiz = {
    s101: [1, 1, 2,4], 
    s102: [2, 1, 2,2], 
    s103: [3, 1, 3,4]
 };

 for (const [studId] in quiz){
     console.log([studId]);
 }