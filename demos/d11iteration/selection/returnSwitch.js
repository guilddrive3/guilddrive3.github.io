"use strict";
/* eslint-disable */
const prompt = require("prompt-sync")();

function getGPA() {
    let grade = prompt("Please enter your grade: ");

    let gpa;

    switch (grade) {
        case 'A':
            gpa = 4.0;
            break;
            return gpa;
        case 'B':
            gpa = 3.0;
            return gpa;
        case 'C':
            gpa = 2
            return gpa;
        default:
            gpa = 0.0;
            return gpa;
    }
}

function getGPA2() {
    let grade = prompt("Please enter your grade: ");

    let gpa;

    switch (grade) {
        case 'A':
            gpa = 4.0;
            break;
        case 'B':
            gpa = 3.0;
            break;;
        case 'C':
            gpa = 2
            break;
        default:
            gpa = 0.0;
    }
    return gpa;
}

console.log('your gpa is ' + getGPA2());