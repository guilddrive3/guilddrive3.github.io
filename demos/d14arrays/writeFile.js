"use strict";
//https://nodejs.dev/learn/writing-files-with-nodejs
const fsys = require("fs")

/* eslint-disable */

function write2file(content) {
    fsys.writeFile("./testWrite.txt", content, function () { });
}

const returnVal = write2file("Hi there!");
console.log("returnVal: ", returnVal);