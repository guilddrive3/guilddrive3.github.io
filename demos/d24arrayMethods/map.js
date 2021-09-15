"use strict";

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6


let lengths2 = ["Bilbo", "Gandalf", "Nazgul"].map((item, foo) => "" + foo + ":" + item.length);
//modify so that it logs array with index: item.length instead of just item.length
console.log("expect 0: 5, 1: 7, 2: 6", lengths2); 
