"use strict";  
/* eslint-disable */

const aString = "This could be anything";
const reordered = "be This could anything";

const words = aString.split(" ");
const sortedWords = words.sort(wordComparator);

console.log("expect", reordered, " :: ",  sortedWords.join(" "));

function wordComparator(word1, word2){
    return word1.length - word2.length;
}