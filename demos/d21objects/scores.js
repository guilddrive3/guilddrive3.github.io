/* Create 3 objects, student1, student2, student3
 property studentId :  s101, s102, s103 respectively
property quizAnswers:  [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
push the students into an array, quiz
 write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g., [3,1,2,4] and returns an array that has scores for each student.  Their score is the number of correct answers. 
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
const correctAnswers = [3, 1, 2, 4];

/**
 * 
 * @param {Array} quizArr is array of students and their quizAnswers
 * @param {Array} correctAnswers is an array of the correct answers
 * @returns {Array} returns an array that has scores for each student
 */
function gradeQuiz(quizArr, correctAnswers) {
    const scores = [];
    /* loop through quiz array and score each student */
    for (const student of quizArr) {
        scores.push(scoreStudent(student.quizAnswers, correctAnswers));
    }
    return scores;
}


// eslint-disable-next-line require-jsdoc
function gradeQuiz2(quizArr, correctAnswers) {
    const scores = {};
    /* loop through quiz array and score each student */
    for (const student of quizArr) {
        scores[student.studentId] = scoreStudent(student.quizAnswers, correctAnswers);
    }
    return scores;
}

/**
 * 
 * @param {Array} stuAnswers is student quiz answers array
 * @param {Array} correct is array of correct answers
 * @returns {number} number correct quiz answers
 */
function scoreStudent(stuAnswers, correct) {
    let numCorrect = 0;
    for (let i = 0; i < correct.length; i++) {
        if (stuAnswers[i] === correct[i]) {
            numCorrect += 1;
        }
    }

    return numCorrect;
}

console.log("expect [ 3, 2, 3 ]: ", gradeQuiz(quiz, correctAnswers));

//const correctAnswers = [ 3, 1, 2, 4 ];

const correctAnsws = {
    q1: 3,
    q2: 1,
    q3: 2,
    q4: 4
};

const stuScores = {
    s101: 0,
    s102: 0,
    s103: 0,
    s99: 99
};

