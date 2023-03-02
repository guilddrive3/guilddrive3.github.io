/**
 * @param {*} a can be anything
 * @param {*} b can be anything
 * @returns {undefined} 
 */
function swap() {
    //debugger;
    let temp = x;
    x = y;
    y = temp;
    //x = 100;
}

let x = 5;
let y = 10;
swap();
console.log("expect 10, 5", x, y);  //?? is swap working
