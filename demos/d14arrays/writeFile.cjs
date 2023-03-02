
//https://nodejs.dev/learn/writing-files-with-nodejs
/* require is CommonJS module , not ESM */
const fsys = require("fs")


/* eslint-disable */

function write2file(content) {
    fsys.writeFile("./testWrite.txt", content, function () { });
}

const returnVal = write2file("goodbye bye!");
console.log("returnVal: ", returnVal);