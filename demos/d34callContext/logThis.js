//"use strict";
/* eslint-disable */

function a() {
    console.log("this in function a: ", this);}
  
  const b = {
    dog: 'fido',
    log: function() {
      console.log("this in method/function log: ", this);  }}
  
  console.log("this in console.log: ", this); 
  a(); 
  b.log(); 
  let mylog = b.log;
  mylog();
  