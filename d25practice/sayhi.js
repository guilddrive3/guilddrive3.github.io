"use strict";
/* eslint-disable */

function sayHi() {
    this.lat = 41.00;
    this.long = -92.96;
    console.log(this);
  }
//sayHi(); // undefined

const myHi = {abc: 123, say: sayHi};

const newVar = myHi.say;

myHi.apple = "fruit";
console.log(myHi);

const donkey = myHi;
donkey.feet = 4;
console.log(myHi);

