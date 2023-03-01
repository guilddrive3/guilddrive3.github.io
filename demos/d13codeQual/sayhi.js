"use strict";



//What is the value of sayHiReturn? (read the code very carefully, particularly the line containing sayHiReturn)

// function sayHi(name) {

//   console.log("Hi ", name);

//   //return "Bye " + name;

//   return "hi there!!!";
// }
// //const sayHiReturn = console.log("hi there!!!" );
// const sayHiReturn = console.log(sayHi());

// console.log("sayHiReturn is:", sayHiReturn);


//What is the value of sayHiReturn? (read the code very carefully, particularly the line containing sayHiReturn)

/**
 * 
 * @param {String} name is any string
 * @returns {String} bye plus name
 */
function sayHi(name) {
  console.log("Hi " , name);
 return "Bye " + name;
}
const sayHiReturn = console.log(sayHi() );

console.log("sayHiReturn is: " , sayHiReturn);
