
"use strict";
/* 
Use the for .. in loop in a function, getProperties(obj), that will collect all the object properties in an array and then return the array. */

const gradeReport = { s101: 3, s102: 2, s103: 3 };

/**
 * 
 * @param {Object} obj is any object
 * @returns {Array} containing obj properties
 */
function getProperties(obj){
    const propArr = [];
    for (const property in obj){
        propArr.push(property);
    }
    return propArr;
}

console.log("expect [s100, s102, s103 ] : " , getProperties(gradeReport));

console.log("expect [s100, s102, s103 ] : " , Object.keys(gradeReport));