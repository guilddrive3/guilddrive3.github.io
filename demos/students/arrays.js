"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
module.exports = {
    maxOfThree: maxOfThree 
    
    , sum: sum, multiply: multiply, 
    findLongestWord: findLongestWord, reverseArray: reverseArray, reverseArrayInPlace: reverseArrayInPlace }
//     scoreExams: scoreExams, generateArray: generateArray
// }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
    return Math.max(Math.max(a, b), c);
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let tot = 0;
    for (const number of arr) {
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {

    let tot = 1;

    for (const number of arr) {
        tot *= number;
    }

    return tot;

}
/**
 * 
 * @param {Array} arr of word
 * @returns {String} longests word
 */
function findLongestWord(arr) {
    let maxLength = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }
    return maxLength;
}

/**
 * 
 * @param {Array} arr of elememt
 * @returns {Array} new reversed array
 */
function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

/**
* 
* @param {Array} arr of number. 
* @returns{Array} the modified arr
*/
function reverseArrayInPlace(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
/**
 * 
 * @param {Array} studentAnswers score of each student
 * @param {Array} correctAnswers correct answer
 * @returns {Array} number of correct answer
 */
function scoreExams(studentAnswers, correctAnswers) {
    let score = [];
    for (let i = 0; i < studentAnswers.length; i++) {
        let count = 0;
        for (let j = 0; j < studentAnswers[i].length; j++) {
            if (studentAnswers[i][j] == correctAnswers[j]) {
                count++;
            }
        }
        score[i] = count;
    }
    return score;
}
const studentAnswers = [[1, 1, 2, 4], [2, 1, 2, 2], [3, 1, 3, 4]];
const correctAnswers = [3, 1, 2, 4];

console.log(scoreExams(studentAnswers, correctAnswers));

/**
 * 
 * @param {number} x value of row
 * @param {number} y value of column
 * @returns {Array} multidimentinal array
 */
function generateArray(x, y) {

    let newArr = new Array;
    let count = 1;

    for (let i = 0; i < x; i++) {
        let arr = new Array;
        for (let j = 0; j < y; j++) {
            arr.push(count);
            count++;
        }
        newArr.push(arr);
    }
    return newArr;
}