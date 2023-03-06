/*  Create 3 objects, student1, student2, student3
 property studentId :  s101, s102, s103 respectively
property quizAnswers:  [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
push the students into an array, quiz
 write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g., [3,1,2,4] and returns an array that has scores for each student.  Their score is the number of correct answers. 
 expect   [ 3, 2, 3 ]
 use a helper function to compute the score for a given student
*/
const key = [3,1,2,4];
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

const stuList = [student1, student2, student3];
/**
 * 
 * @param {Object} student is student
 * @param {Array} key is array of correct answers
 * @returns {Number} num of correct answers
 */
function studentScore(student, key){
    let numCorrect = 0;
    for (let i = 0; i < key.length; i++){ 
        if (key[i] === student.quizAnswers[i])
        numCorrect = numCorrect + 1;
    }
    return numCorrect;
}

console.log("expect 3: ", studentScore(student1,key ));

/**
 * 
 * @param {Array} studentList of student objects
 * @param {Array} key array of correct answers
 * @returns {Array} array of number correct for each student
 */
function gradeQuiz(studentList, key){
    const correctArray = [];
    for (const stu of studentList){
        const numCorrect = studentScore(stu, key);
        correctArray.push(numCorrect);
    }

    return correctArray;
}

console.log("expect [ 3, 2, 3 ] ", gradeQuiz(stuList, key));