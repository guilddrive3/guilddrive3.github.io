/* 5.	Write a function, scoreExams, that takes an array of arrays of student answers 
and an array of the correct answers.  It should compare each student’s answers against 
the correct answers and return an array holding the scores of each student.  The score 
for each student is a count of the number of correct answers (i.e., matches with the key 
    of correct answers).  For example

const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
const correctAnswers = [3, 1, 2,4];
scoreExams(studentAnswers, correctAnswers)); --> [3,2,3]
*/

/**
 * 
 * @param {Array} stuAnswers array of arrays of student answers
 * @param {Array} correctAnswers exam key
 * @returns {Array} array holding the scores of each studen
 */
function scoreExams(stuAnswers, correctAnswers){
    const numCorrectArr = [];
    /* loop through each student and get score--count of correct */
    for (const aStudent of stuAnswers){
        const score = scoreStudent(aStudent, correctAnswers);
        numCorrectArr.push(score);
    }
    return numCorrectArr;
}

/**
 * 
 * @param {Array} stuAns array of answers for a single student
 * @param {Array} corrAns key of correct answers
 * @returns {number} number of student answers that match correct
 */
function scoreStudent(stuAns, corrAns){
    let numCorrect = 0;
    for (let i = 0; i < stuAns.length; i=i+1){
        if (stuAns[i] === corrAns[i]){
            numCorrect += 1;
        }
    }
    return numCorrect;
}

const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
const correctAnswers = [3, 1, 2,4];
console.log("expect [3,2,3] :  ", scoreExams(studentAnswers, correctAnswers)); // [3,2,3]
