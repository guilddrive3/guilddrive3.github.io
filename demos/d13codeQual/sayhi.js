"use strict";

/* eslint-disable*/

//What is the value of sayHiReturn? (read the code very carefully, particularly the line containing sayHiReturn)

function sayHi(name) {

    console.log("Hi " , name);
  
    //return "Bye " + name;

    return "hi there!!!";
  
  }
  //const sayHiReturn = console.log("hi there!!!" );
  const sayHiReturn = console.log(sayHi());

  console.log("sayHiReturn is:" , sayHiReturn);
  