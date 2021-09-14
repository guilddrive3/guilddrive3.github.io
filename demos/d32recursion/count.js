"use strict";


// Find length of a String recursively, without using length property
/*
function findLengthRecursive(s){
    if(s==="")
        return 0;
    else
        return 1+ findLengthRecursive(s.substr(1));
    }
    console.log(findLengthRecursive("Hello"));
  */

/**
 * 
 * @param {string} str is any string 
 * @param {string} letter is a one character string
 * @returns {number} count of letter in str
 */
function countInstances(str, letter){
    if(str===""){
        return 0;
    }
    else {
        if (letter === str[0]) {
            return 1 + countInstances(str.substr(1), letter);
        } else {
            return countInstances(str.substr(1), letter);
        }
    }
}

console.log("expect 2", countInstances("abca", "a"));